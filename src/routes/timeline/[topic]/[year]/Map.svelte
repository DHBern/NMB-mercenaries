<script lang="ts">
	import type { Action } from 'svelte/action';
	import CirclesSeasia from '$lib/circle-components/Circles-seasia.svelte';
	import CirclesEurope from '$lib/circle-components/Circles-europe.svelte';
	import CirclesJava from '$lib/circle-components/Circles-java.svelte';

	let { region, place, topic } = $props();
	let elPlace = $state();

	// Style highlighted circles
	$effect(() => {
		// Get marked circles of place
		switch (place) {
			case 'batavia':
				elPlace = document.querySelector('#seasia-batavia');
				break;
			case 'banjarmasin':
				elPlace = document.querySelector('#seasia-banjarmasin');
				break;
			case 'padangse':
				elPlace = document.querySelector('#seasia-padangse');
				break;
			case 'biel':
				elPlace = document.querySelector('#europe-biel');
				break;
			case 'neapel':
				elPlace = document.querySelector('#europe-neapel');
				break;
			case 'heidelberg':
				elPlace = document.querySelector('#europe-heidelberg');
				break;
			case 'wien':
				elPlace = document.querySelector('#europe-wien');
				break;
			case 'halle':
				elPlace = document.querySelector('#europe-halle');
				break;
			case 'baryssau':
				elPlace = document.querySelector('#europe-baryssau');
				break;
			case 'franche':
				elPlace = document.querySelector('#europe-franche');
				break;
			case 'hertogenbosch':
				elPlace = document.querySelector('#europe-hertogenbosch');
				break;
			case 'hulst':
				elPlace = document.querySelector('#europe-hulst');
				break;
			case 'rotterdam':
				elPlace = document.querySelector('#europe-rotterdam');
				break;
		}

		// Style circles
		elPlace?.classList.add('marked');
		elPlace?.style.setProperty('r', '12px');
		switch (topic) {
			case 'Heilmann':
				elPlace?.style.setProperty('fill', 'var(--color-warning-900)');
				break;
			case 'Neuhaus':
				elPlace?.style.setProperty('fill', 'var(--color-success-900)');
				break;
			case 'Brunnen':
				elPlace?.style.setProperty('fill', 'var(--color-error-900)');
				break;
		}
	});
</script>

<svg class="map" viewBox="0 0 1000 840" data-topic={topic}>
	<!-- South East Asia -->
	{#if region == 'seasia'}
		{#if place == 'batavia'}
			<!-- <CirclesJava /> -->
			<CirclesSeasia />
		{:else if place == 'banjarmasin'}
			<!-- <CirclesBanjarmasin /> -->
			<CirclesSeasia />
		{:else if place == 'padangse'}
			<!-- <CirclesPadangse /> -->
			<CirclesSeasia />
		{:else}
			<CirclesSeasia />
		{/if}

		<!-- Europe -->
	{:else if region == 'europe'}
		<!-- <CirclesEurope /> -->
		{#if place == 'biel' || place == 'hofwil'}
			<!-- <CirclesBiel /> -->
			<CirclesEurope />
		{:else if place == 'neapel' || place == 'nola'}
			<!-- <CirclesNeapel /> -->
			<CirclesEurope />
		{:else if place == 'heidelberg'}
			<!-- <CirclesHeidelberg /> -->
			<CirclesEurope />
		{:else if place == 'wien'}
			<!-- <CirclesWien /> -->
			<CirclesEurope />
		{:else if place == 'halle'}
			<!-- <CirclesHalle /> -->
			<CirclesEurope />
		{:else if place == 'baryssau'}
			<!-- <CirclesBaryssau /> -->
			<CirclesEurope />
		{:else if place == 'franche'}
			<!-- <CirclesFranche /> -->
			<CirclesEurope />
		{:else if place == 'hertogenbosch'}
			<!-- <CirclesHertogenbosch /> -->
			<CirclesEurope />
		{:else if place == 'hulst'}
			<!-- <CirclesHulst /> -->
			<CirclesEurope />
		{:else if place == 'rotterdam'}
			<!-- <CirclesRotterdam /> -->
			<CirclesEurope />
		{:else}
			<CirclesEurope />
		{/if}
	{/if}
	
	<!-- Pull marked circles to front -->
	<use xlink:href="#seasia-batavia" />
	<use xlink:href="#seasia-banjarmasin" />
	<use xlink:href="#seasia-padangse" />
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

<style>
	@keyframes pulse {
		0% {
			r: 20;
			fill: 'red'
			opacity: 1;
		}
		50% {
			r: 50;
			fill: 'blue'
			opacity: 0.6;
		}
		100% {
			r: 20;
			fill: 'red'
			opacity: 1;
		}
	}
</style>
