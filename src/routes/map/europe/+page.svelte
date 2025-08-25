<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	// import CirclesEurope from '$lib/circle-components/Circles-europe.svelte';
	import CirclesEurope from '$lib/circle-components/Circles-europe-150.svelte';
	import { colors } from '$lib/metadata.json';
	import FullMap from '../FullMap.svelte';
	import { onNavigate } from '$app/navigation';
	import { localizeHref } from '$lib/paraglide/runtime';

	let isPulsating = $state(false);
	let timerPing = setTimeout(() => {
		isPulsating = true;
	}, 2000);

	onNavigate(() => {
		isPulsating = false;
		clearTimeout(timerPing);
		timerPing = setTimeout(() => {
			isPulsating = true;
		}, 2000);
	});

	// Style circles
	function applyStyles(elements, color, url) {
		elements.forEach((el) => {
			el?.style.setProperty('r', '8px');
			el?.style.setProperty('fill', `var(--color-${color}-500)`);
			el?.addEventListener('click', () => {
				goto(url);
			});
		});
	}

	onMount(() => {
		applyStyles(document.querySelectorAll('.europe-biel'), 'error', `${base}/timeline/Biel/1798`);
		applyStyles(
			document.querySelectorAll('.europe-neapel'),
			'warning',
			`${base}/timeline/Heilmann/1829`
		);
		applyStyles(
			document.querySelectorAll('.europe-heidelberg'),
			'warning',
			`${base}/timeline/Heilmann/1804`
		);
		applyStyles(
			document.querySelectorAll('.europe-wien'),
			'warning',
			`${base}/timeline/Heilmann/1814`
		);
		applyStyles(
			document.querySelectorAll('.europe-halle'),
			'warning',
			`${base}/timeline/Heilmann/1829`
		);
		applyStyles(
			document.querySelectorAll('.europe-baryssau'),
			'success',
			`${base}/timeline/Neuhaus/1812`
		);
		applyStyles(
			document.querySelectorAll('.europe-franche'),
			'success',
			`${base}/timeline/Neuhaus/1815`
		);
		applyStyles(
			document.querySelectorAll('.europe-hertogenbosch'),
			'success',
			`${base}/timeline/Neuhaus/1816`
		);
		applyStyles(
			document.querySelectorAll('.europe-hulst'),
			'success',
			`${base}/timeline/Neuhaus/1831`
		);
		applyStyles(
			document.querySelectorAll('.europe-rotterdam'),
			'success',
			`${base}/timeline/Neuhaus/1843`
		);
	});
</script>

<div class="absolute top-0 left-0 !z-10 h-screen w-full items-center justify-center">
	<FullMap />

	<!-- Region Map -->
	<svg class="map max-h-[calc(100vh)] w-screen p-[40px]" viewBox="0 0 1500 840">
		<CirclesEurope {isPulsating} />

		<foreignObject x="625" y="415" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Biel/1798`)}
				class={['btn font-semibold', colors['preset-filled']['Biel']]}>Biel, Hofwil</a
			>
		</foreignObject>
		<foreignObject x="775" y="570" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Heilmann/1829`)}
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}>Neapel, Nola</a
			>
		</foreignObject>
		<foreignObject x="625" y="325" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Heilmann/1804`)}
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}>Heidelberg</a
			>
		</foreignObject>
		<foreignObject x="840" y="395" width="100" height="50">
			<a
				href={localizeHref(`${base}/timeline/Heilmann/1814`)}
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}>Wien</a
			>
		</foreignObject>
		<foreignObject x="735" y="265" width="100" height="50">
			<a
				href={localizeHref(`${base}/timeline/Heilmann/1829`)}
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}>Halle</a
			>
		</foreignObject>
		<foreignObject x="1115" y="165" width="100" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1812`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Baryssau</a
			>
		</foreignObject>
		<foreignObject x="415" y="415" width="185" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1815`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Franche-Comté</a
			>
		</foreignObject>
		<foreignObject x="545" y="265" width="180" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1816`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>‘s-Hertogenbosch</a
			>
		</foreignObject>
		<foreignObject x="440" y="205" width="100" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1831`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Hulst</a
			>
		</foreignObject>
		<foreignObject x="555" y="195" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1843`)}
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
		<use xlink:href="#europe-biel-ping" />
		<use xlink:href="#europe-neapel-ping" />
		<use xlink:href="#europe-heidelberg-ping" />
		<use xlink:href="#europe-wien-ping" />
		<use xlink:href="#europe-halle-ping" />
		<use xlink:href="#europe-baryssau-ping" />
		<use xlink:href="#europe-franche-ping" />
		<use xlink:href="#europe-hertogenbosch-ping" />
		<use xlink:href="#europe-hulst-ping" />
		<use xlink:href="#europe-rotterdam-ping" />
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
