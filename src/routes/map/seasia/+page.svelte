<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import CirclesSeasia from '$lib/circle-components/Circles-seasia.svelte';
	import colors from '$lib/colors.json';
	import FullMap from '../FullMap.svelte';

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
			'{base}/timeline/Neuhaus/1840'
		);
		applyStyles(
			document.querySelectorAll('.seasia-banjarmasin'),
			'success',
			'{base}/timeline/Neuhaus/1836'
		);
		applyStyles(
			document.querySelectorAll('.seasia-padangse'),
			'success',
			'{base}/timeline/Neuhaus/1829'
		);
	});
</script>

<div class="flex h-screen items-center justify-center">
	<FullMap />

	<!-- Region Map -->
	<svg class="map max-h-[calc(100vh/12*10)]" viewBox="0 0 1000 840">
		<CirclesSeasia />
		<foreignObject x="170" y="520" width="300" height="50">
			<a
				href="{base}/timeline/Neuhaus/1840"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Padangse Bovenlanden</a
			>
		</foreignObject>
		<foreignObject x="565" y="420" width="300" height="50">
			<a
				href="{base}/timeline/Neuhaus/1836"
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}>Banjarmasin</a
			>
		</foreignObject>
		<foreignObject x="440" y="630" width="150" height="50">
			<a
				href="{base}/timeline/Neuhaus/1829"
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
