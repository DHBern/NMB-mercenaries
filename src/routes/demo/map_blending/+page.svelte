<script lang="ts">
	import Map_all from './Map_all.svelte';

	const nMaps = 5;
	let toggle = 0;
	function toggleState() {
		toggle = ((toggle + 1) % nMaps) + 1;
		document.documentElement.style.setProperty('--state', toggle.toString());
	}
</script>

<div class="bg-white">
	<Map_all />

	<!--
	<img alt="full" href="./full-100-2.2-0.svg" class="hidden full w-[800px]" />
	<img alt="europe" href="./europe-100-2.2-0.svg" class="hidden europe w-[800px]" />
	<img alt="seasia" href="./seasia-100-2.2-0.svg" class="hidden seasia w-[800px]" />
	<img alt="java" href="/rastermaps/java-100-2.2-0.svg" class="hidden java w-[800px]" />
	<img alt="rivers" href="/rastermaps/rivers-100-7-0.54.svg" class="hidden rivers w-[800px]" />
	-->
</div>

<button
	onclick={() => {
		toggleState();
	}}>Toggle</button
>

<style>
	img.hidden {
		display: none;
	}
	:root {
		--state: 3;
	}
	:global(.animated-svg circle) {
		/* r: calc(
			1px * var(--java) * clamp(0, var(--state) - 1, 1) + 1px * var(--rivers) *
				clamp(0, var(--state) - 2, 1) + 1px * var(--europe) * clamp(0, var(--state) - 3, 1)
		); */
		r: calc(
			1px *
				calc(
					var(--full) *
						calc(2 * abs(abs(calc(max(0, min(1, calc(var(--state) - 0.5))) - 0.5)) - 0.5))
				) +
				1px *
				calc(
					var(--europe) *
						calc(2 * abs(abs(calc(max(0, min(1, calc(var(--state) - 1.5))) - 0.5)) - 0.5))
				) +
				1px *
				calc(
					var(--seasia) *
						calc(2 * abs(abs(calc(max(0, min(1, calc(var(--state) - 2.5))) - 0.5)) - 0.5))
				) +
				1px *
				calc(
					var(--java) *
						calc(2 * abs(abs(calc(max(0, min(1, calc(var(--state) - 3.5))) - 0.5)) - 0.5))
				) +
				1px *
				calc(
					var(--rivers) *
						calc(2 * abs(abs(calc(max(0, min(1, calc(var(--state) - 4.5))) - 0.5)) - 0.5))
				)
		);

		/* r: calc(1px *
			(
			calc(var(--state) * 1) == 1 ? var(--java) :
			calc(var(--state) * 1) == 2 ? var(--europe) :
			calc(var(--state) * 1) == 3 ? var(--rivers) : var(--java)
			)
		); */
		transition: r 5s ease-in-out;
	}
</style>
