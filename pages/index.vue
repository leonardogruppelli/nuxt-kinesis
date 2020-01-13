<template>
	<main role="main">
		<intro />
		<hover />
		<scroll />
		<parallax />
		<visualizer />
	</main>
</template>

<script>
import Intro from '~/components/intro'
import Hover from '~/components/hover'
import Scroll from '~/components/scroll'
import Parallax from '~/components/parallax'
import Visualizer from '~/components/visualizer'

export default {
	components: {
		Intro,
		Hover,
		Scroll,
		Parallax,
		Visualizer
	}
}
</script>
