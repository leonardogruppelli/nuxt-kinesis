<template>
	<footer>
		<h5>made by</h5>
		<h5>Leonardo Gruppelli</h5>

		<a href="https://github.com/leonardogruppelli" target="_blank">
			<kinesis-container>
				<kinesis-element type="depth" :strength="15">
					<git />
				</kinesis-element>
			</kinesis-container>
		</a>

		<a href="https://www.linkedin.com/in/leonardo-gruppelli/" target="_blank">
			<kinesis-container>
				<kinesis-element type="depth" :strength="15">
					<linkedin />
				</kinesis-element>
			</kinesis-container>
		</a>
	</footer>
</template>

<script>
import Git from '~/static/images/icons/github.svg'
import Linkedin from '~/static/images/icons/linkedin.svg'

export default {
	components: {
		Git,
		Linkedin
	}
}
</script>
