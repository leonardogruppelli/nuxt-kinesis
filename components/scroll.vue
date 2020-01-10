<template>
	<section class="scroll">
		<div class="container">
			<kinesis-container event="scroll">
				<div class="scroll__description">
					<rune :size="400" :parts="5" :top="0" :left="-450" />
					<rune :size="200" :parts="5" :top="10" :left="10" />
					<rune :size="50" :parts="5" :top="250" :left="20" />
					<rune :size="220" :parts="5" :top="50" :left="300" />
					<rune :size="70" :parts="5" :top="300" :left="200" />
					<rune :size="180" :parts="5" :top="300" :left="450" />
					<rune :size="80" :parts="5" :top="-5" :left="1050" />
					<rune :size="100" :parts="5" :top="250" :left="900" />
					<rune :size="150" :parts="5" :top="-20" :left="1350" />
					<rune :size="250" :parts="5" :top="-100" :left="700" />
					<rune :size="125" :parts="5" :top="200" :left="700" />
					<rune :size="300" :parts="5" :top="100" :left="1050" />

					<kinesis-element tag="h2" :strength="30" type="depth_inv"
						>Simple scroll effect</kinesis-element
					>
				</div>
			</kinesis-container>
		</div>
	</section>
</template>

<script>
import Rune from '~/components/rune'

export default {
	components: {
		Rune
	}
}
</script>
