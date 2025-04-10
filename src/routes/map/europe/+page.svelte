<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { PageData } from '../$types';
	import CirclesEurope from '$lib/circle-components/Circles-europe.svelte';
	import CirclesFull from '$lib/circle-components/Circles-full.svelte';
	import { base } from '$app/paths';
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
		applyStyles(
			document.querySelector('#europe-biel'),
			'error',
			'../timeline/Brunnen/1798'
		);
		applyStyles(
			document.querySelector('#europe-neapel'),
			'warning',
			'../timeline/Heilmann/1829'
		);
		applyStyles(
			document.querySelector('#europe-heidelberg'),
			'warning',
			'../timeline/Heilmann/1804'
		);
		applyStyles(
			document.querySelector('#europe-wien'),
			'warning',
			'../timeline/Heilmann/1814'
		);
		applyStyles(
			document.querySelector('#europe-halle'),
			'warning',
			'../timeline/Heilmann/1829'
		);
		applyStyles(
			document.querySelector('#europe-baryssau'),
			'success',
			'../timeline/Neuhaus/1812'
		);
		applyStyles(
			document.querySelector('#europe-franche'),
			'success',
			'../timeline/Neuhaus/1815'
		);
		applyStyles(
			document.querySelector('#europe-hertogenbosch'),
			'success',
			'../timeline/Neuhaus/1816'
		);
		applyStyles(
			document.querySelector('#europe-hulst'),
			'success',
			'../timeline/Neuhaus/1831'
		);
		applyStyles(
			document.querySelector('#europe-rotterdam'),
			'success',
			'../timeline/Neuhaus/1843'
		);
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
		<CirclesEurope />

		<foreignObject x="460" y="450" width="150" height="40">
			<a
				href="../timeline/Brunnen/1798"
				class={['btn font-semibold', colors['preset-filled']['Brunnen']]}>Biel, Hofwil</a
			>
		</foreignObject>
		<foreignObject x="445" y="585" width="150" height="40">
			<a
				href="../timeline/Heilmann/1829"
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}>Neapel, Nola</a
			>
		</foreignObject>
		<foreignObject x="490" y="350" width="150" height="40">
			<a
				href="../timeline/Heilmann/1804"
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}>Heidelberg</a
			>
		</foreignObject>
		<foreignObject x="680" y="415" width="100" height="40">
			<a
				href="../timeline/Heilmann/1814"
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}>Wien</a
			>
		</foreignObject>
		<foreignObject x="570" y="240" width="100" height="40">
			<a
				href="../timeline/Heilmann/1829"
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}>Halle</a
			>
		</foreignObject>
		<foreignObject x="790" y="140" width="100" height="40">
			<a
				href="../timeline/Neuhaus/1812"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Baryssau</a
			>
		</foreignObject>
		<foreignObject x="230" y="390" width="180" height="40">
			<a
				href="../timeline/Neuhaus/1815"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Franche-Comté</a
			>
		</foreignObject>
		<foreignObject x="380" y="290" width="180" height="40">
			<a
				href="../timeline/Neuhaus/1816"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>‘s-Hertogenbosch</a
			>
		</foreignObject>
		<foreignObject x="270" y="300" width="100" height="40">
			<a
				href="../timeline/Neuhaus/1831"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Hulst</a
			>
		</foreignObject>
		<foreignObject x="370" y="230" width="150" height="40">
			<a
				href="../timeline/Neuhaus/1843"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Rotterdam</a
			>
		</foreignObject>
		<!-- Pull marked circles to front -->
		<use xlink:href="#europe-biel" />
		<use xlink:href="#europe-neapel" />
		<use xlink:href="#europe-heidelberg" />
		<use xlink:href="#europe-wien" />
		<use xlink:href="#europe-halle" />
		<use xlink:href="#europe-baryssau" />
		<use xlink:href="#europe-franche" />
		<use xlink:href="#europe-hertogenbosch" />
		<use xlink:href="#europe-hulst" />
		<use xlink:href="#europe-rotterdam" />
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
		fill: var(--color-primary-500);
	}
</style>
