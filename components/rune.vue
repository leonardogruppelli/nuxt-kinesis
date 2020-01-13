<template>
	<kinesis-container
		event="scroll"
		class="rune"
		:duration="time()"
		:style="
			`width: ${size}px; height: ${size}px; top: ${top}px; left: ${left}px`
		"
	>
		<kinesis-element
			tag="span"
			v-for="index in parts"
			:key="index"
			:strength="strength()"
			type="rotate"
			:style="
				`width: ${scale(index)}px; height: ${scale(
					index
				)}px; box-shadow: inset 0 0 0 ${border()}px rgba(108, 99, 255, 0.3); top: ${position(
					scale(index)
				)}px; left: ${position(scale(index))}px; z-index: ${parts - index};`
			"
		/>
	</kinesis-container>
</template>

<script>
export default {
	props: ['size', 'parts', 'top', 'left'],
	methods: {
		time() {
			return Math.floor(Math.random() * 5000) + 1000
		},
		scale(index) {
			const percentage = this.size / this.parts
			return index * percentage
		},
		border() {
			return this.size / (this.parts * this.parts)
		},
		position(scale) {
			return this.size / 2 - scale / 2
		},
		strength() {
			return Math.floor(Math.random() * 500) + 100
		}
	}
}
</script>
