<template>
	<main role="main">
		<intro />
		<hover />
		<scroll />
		<parallax />
	</main>
</template>

<script>
import Intro from '~/components/intro'
import Hover from '~/components/hover'
import Scroll from '~/components/scroll'
import Parallax from '~/components/parallax'

export default {
	components: {
		Intro,
		Hover,
		Scroll,
		Parallax
	}
}
</script>
