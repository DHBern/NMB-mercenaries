<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from '../$types';
	import { base } from '$app/paths';
	import CirclesSeasia from '$lib/circle-components/Circles-seasia.svelte';
	import CirclesFull from '$lib/circle-components/Circles-full.svelte';
	import colors from '$lib/colors.json';

	let { data }: { data: PageData } = $props();
	let color = $state();


	// Style circles
	function applyStyles(el, color, url) {
		el?.classList.add('marked');
		el?.style.setProperty('r', '8px');
		el?.style.setProperty('fill', `var(--color-${color}-500)`);
		// el?.style.setProperty('stroke', `var(--color-${color}-600)`);
		// el?.style.setProperty('stroke-width', 2);
		el?.addEventListener('click', () => {
			console.log(url);
			goto(url);
		});
	}

	onMount(() => {
		applyStyles(document.querySelector('#seasia-batavia'), 'success', '../timeline/Neuhaus/1840');
		applyStyles(document.querySelector('#seasia-banjarmasin'), 'success', '../timeline/Neuhaus/1836');
		applyStyles(document.querySelector('#seasia-padangse'), 'success', '../timeline/Neuhaus/1829');
	});
</script>

<div class="flex h-screen items-center justify-center">
		<!-- Full Map -->
		<svg
		class="fullmap absolute top-[19vh] left-[20vw] max-h-50 border-4 border-white"
		viewBox="0 0 1000 840"
	>
		<a href="{base}/map" class="">
			<rect x="0" y="0" width="1000" height="840" fill="white" class="cursor-pointer" />
			<CirclesFull />
			<!-- <foreignObject x="0" y="0" width="2000" height="100">
				<span class="bg-white px-4 py-10 text-7xl">Zurück</span>
			</foreignObject> -->
		</a>
	</svg>

	<!-- Region Map -->
	<svg class="map max-h-[calc(100vh/12*10)]" viewBox="0 0 1000 840">
		<CirclesSeasia />

		<foreignObject x="100" y="520" width="300" height="40">
			<a
				href="../timeline/Neuhaus/1840"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Padangse Bovenlanden, Sumatra</a
			>
		</foreignObject>
		<foreignObject x="500" y="420" width="300" height="40">
			<a
				href="../timeline/Neuhaus/1836"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Banjarmasin, Borneo</a
			>
		</foreignObject>
		<foreignObject x="390" y="630" width="150" height="40">
			<a
				href="../timeline/Neuhaus/1829"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Batavia, Java</a>
		</foreignObject>

		<foreignObject x="170" y="520" width="300" height="40">
			<a
				href="../timeline/Neuhaus/1840"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Padangse Bovenlanden</a
			>
		</foreignObject>
		<foreignObject x="565" y="420" width="300" height="40">
			<a
				href="../timeline/Neuhaus/1836"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Banjarmasin</a
			>
		</foreignObject>
		<foreignObject x="440" y="630" width="150" height="40">
			<a
				href="../timeline/Neuhaus/1829"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Batavia</a
			>
		</foreignObject>

		<!-- Pull marked circles to front -->
		<use xlink:href="#seasia-batavia" />
		<use xlink:href="#seasia-banjarmasin" />
		<use xlink:href="#seasia-padangse" />
	</svg>
</div>

<style>
	img.hidden {
		display: none;
	}
	.fullmap :global(circle) {
	fill: var(--color-surface-600);
	}
	.map :global(circle) {
		fill: #d9d9d9;
	}

</style>
