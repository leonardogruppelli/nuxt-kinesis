<template>
	<main role="main">
		<intro />
		<hover />
		<scroll />
		<parallax />
		<visualizer />
    <credits />
	</main>
</template>

<script>
import Intro from '~/components/intro'
import Hover from '~/components/hover'
import Scroll from '~/components/scroll'
import Parallax from '~/components/parallax'
import Visualizer from '~/components/visualizer'
import Credits from '~/components/credits'

export default {
	components: {
		Intro,
		Hover,
		Scroll,
		Parallax,
    Visualizer,
    Credits
	}
}
</script>
