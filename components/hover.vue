<template>
	<div class="container">
		<section class="hover">
			<div class="hover__description">
				<h3>Simple hover effect</h3>
				<p>simple hover effect on a image</p>
				<p>using the type `depth`</p>
			</div>
			<div class="hover__effect">
				<kinesis-container>
					<kinesis-element
						tag="img"
						src="images/png/winter_activities.png"
						:strength="10"
						type="depth"
						transform-origin="25% 50%"
					/>
				</kinesis-container>
			</div>
		</section>
	</div>
</template>
