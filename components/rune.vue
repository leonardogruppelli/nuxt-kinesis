<template>
	<div
		class="rune"
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
	</div>
</template>

<script>
export default {
	props: ['size', 'parts', 'top', 'left'],
	methods: {
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
