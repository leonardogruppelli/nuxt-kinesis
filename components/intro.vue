<template>
	<section class="intro">
		<kinesis-container class="intro__content">
			<div class="intro__background">
				<kinesis-element
					class="circle circle--one"
					:strength="15"
					type="depth"
					transform-origin="10% 20%"
				/>

				<kinesis-element
					class="circle circle--two"
					:strength="50"
					transform-origin="5% 30%"
				/>

				<kinesis-element
					class="circle circle--three"
					:strength="10"
					transform-origin="55% 20%"
				/>

				<kinesis-element
					class="circle circle--four"
					:strength="5"
					type="depth"
					transform-origin="25% 50%"
				/>

				<kinesis-element
					class="circle circle--five"
					:strength="5"
					transform-origin="85% 50%"
				/>

				<kinesis-element
					class="circle circle--six"
					:strength="15"
					type="depth_inv"
					transform-origin="5% 20%"
				/>

				<kinesis-element
					class="circle circle--seven"
					:strength="15"
					type="depth"
				/>

				<kinesis-element
					class="circle circle--eight"
					:strength="15"
					type="scale"
				/>

				<kinesis-element
					class="cube cube--one"
					:strength="15"
					type="rotate"
					transform-origin="45% 50%"
				/>

				<kinesis-element
					class="cube cube--two"
					:strength="15"
					type="depth_inv"
					transform-origin="5% 40%"
				/>

				<kinesis-element
					class="cube cube--three"
					:strength="15"
					type="rotate"
				/>

				<kinesis-element class="cube cube--four" :strength="40" type="depth" />

				<kinesis-element
					class="cube cube--five"
					:strength="25"
					type="rotate"
					transform-origin="25% 75%"
				/>

				<kinesis-element class="cube cube--six" :strength="60" type="rotate" />

				<kinesis-element class="cube cube--seven" :strength="10" type="scale" />

				<kinesis-element class="cube cube--eight" :strength="15" type="scale" />
			</div>

			<div class="intro__text">
				<div class="intro__text__content">
					<h1>
						<kinesis-element
							tag="span"
							:strength="15"
							type="depth"
							transform-origin="15% 40%"
						>
							N
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							transform-origin="25% 25%"
						>
							U
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							type="rotate"
							transform-origin="80% 40%"
						>
							X
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							type="depth_inv"
							transform-origin="5% 15%"
						>
							T
						</kinesis-element>
					</h1>
					<h1>
						<kinesis-element
							tag="span"
							:strength="15"
							type="rotate"
							transform-origin="60% 5%"
						>
							+
						</kinesis-element>
					</h1>
					<h1>
						<kinesis-element
							tag="span"
							:strength="15"
							type="rotate"
							transform-origin="20% 90%"
						>
							K
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							transform-origin="45% 100%"
						>
							I
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							type="depth_inv"
							transform-origin="55% 75%"
						>
							N
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							type="rotate"
							transform-origin="35% 25%"
						>
							E
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							type="depth"
							transform-origin="10% 70%"
						>
							S
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							type="rotate"
							transform-origin="30% 40%"
						>
							I
						</kinesis-element>
						<kinesis-element
							tag="span"
							:strength="15"
							transform-origin="75% 50%"
						>
							S
						</kinesis-element>
					</h1>

					<kinesis-element tag="h4" :strength="20">
						Nuxt.js app using Kinesis
					</kinesis-element>
					<kinesis-element tag="h5" :strength="10">
						showing some of the possible animations
					</kinesis-element>
				</div>
			</div>
		</kinesis-container>
	</section>
</template>
