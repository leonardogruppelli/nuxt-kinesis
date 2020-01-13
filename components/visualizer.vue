<template>
	<section class="visualizer">
		<kinesis-container
			ref="visualizer"
			:audio="audio"
			:playAudio="playing"
			:duration="500"
		>
			<waves />
			<kinesis-audio
				:audioIndex="60"
				:strength="1"
				class="visualizer__background"
				axis="y"
			/>
			<div class="visualizer__content">
				<kinesis-audio tag="h2" :audioIndex="90" type="scale" :strength="50">
					<h2>Audio effect</h2>
					<button class="visualizer__play" @click="play">
						<play v-show="!playing" />
						<pause v-show="playing" />
					</button>
				</kinesis-audio>
			</div>
		</kinesis-container>
	</section>
</template>

<script>
import Waves from '~/components/waves'
import Play from '~/static/images/icons/play.svg'
import Pause from '~/static/images/icons/pause.svg'

export default {
	components: {
		Waves,
		Play,
		Pause
	},
	data() {
		return {
			audio: 'audio/area_51.mp3',
			playing: false
		}
	},
	methods: {
		play() {
			this.playing = !this.playing
		}
	}
}
</script>
