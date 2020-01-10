import jeet from 'jeet'
import rupture from 'rupture'
import autoprefixer from 'autoprefixer-stylus'

export default {
	mode: 'spa',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Kinesis',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'Nuxt.js using Kinesis for animations'
			}
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
	},
	/*
	 ** Customize the progress-bar
	 */
	loading: { color: '#fff' },
	/*
	 ** Global CSS
	 */
	css: ['~/assets/stylus/core.styl'],
	/*
	 ** Nuxt.js plugins
	 */
	plugins: ['~/plugins/kinesis.js'],
	/*
	 ** Nuxt.js modules
	 */
	modules: [],
	/*
	 ** Build configuration
	 */
	build: {
		extend(config) {
			const stylus = config.module.rules
				.filter(rule => rule.test.toString().match(/\.styl/))[0]
				.oneOf[1].use.find(e => e.loader == 'stylus-loader')

			Object.assign(stylus.options, {
				use: [rupture(), jeet(), autoprefixer()]
			})
		}
	}
}
