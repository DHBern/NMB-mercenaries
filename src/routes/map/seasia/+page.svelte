<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import CirclesSeasia from '$lib/circle-components/Circles-seasia-150-reduced.svelte';
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
		applyStyles(
			document.querySelectorAll('.seasia-batavia'),
			'success',
			`${base}/timeline/Neuhaus/1840`
		);
		applyStyles(
			document.querySelectorAll('.seasia-banjarmasin'),
			'success',
			`${base}/timeline/Neuhaus/1836`
		);
		applyStyles(
			document.querySelectorAll('.seasia-padangse'),
			'success',
			`${base}/timeline/Neuhaus/1829`
		);
	});
</script>

<div class="absolute top-0 left-0 !z-10 h-screen w-screen items-center justify-center">
	<FullMap />

	<!-- Region Map -->
	<svg
		class="map max-h-full w-full bg-[url(/src/lib/mapimages/Map_seasia.png)]"
		viewBox="0 0 1500 840"
	>
		<CirclesSeasia {isPulsating} />
		<foreignObject x="280" y="510" width="380" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1840`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Padangse Bovenlanden</a
			>
		</foreignObject>
		<foreignObject x="790" y="390" width="300" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1836`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Banjarmasin</a
			>
		</foreignObject>
		<foreignObject x="600" y="620" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1829`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Batavia</a
			>
		</foreignObject>

		<!-- Pull marked circles to front -->
		<use xlink:href="#seasia-batavia" />
		<use xlink:href="#seasia-banjarmasin" />
		<use xlink:href="#seasia-padangse" />
		<use xlink:href="#seasia-batavia-ping" />
		<use xlink:href="#seasia-banjarmasin-ping" />
		<use xlink:href="#seasia-padangse-ping" />
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
