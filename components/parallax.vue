<template>
	<section class="parallax">
		<div class="parallax__container">
			<kinesis-container event="scroll">
				<kinesis-element tag="h2" :strength="30" type="rotate"
					>Parallax effect</kinesis-element
				>
				<div class="parallax__content">
					<kinesis-element
						tag="div"
						:strength="500"
						class="parallax__background"
					/>
				</div>
			</kinesis-container>
		</div>
	</section>
</template>
