<script lang="ts">
	import CirclesSeasia from '$lib/circle-components/Circles-seasia.svelte';
	import CirclesEurope from '$lib/circle-components/Circles-europe.svelte';

	let { classes = '', region, place, topic } = $props();
	let elPlace: Element | null = $state(null);

	// Style highlighted circles
	$effect(() => {
		// Get marked circles of place
		elPlace?.classList?.remove('marked', 'bigger', `fill-Neuhaus`, `fill-Heilmann`, `fill-Biel`);
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
		elPlace?.classList.add('marked', 'bigger', `fill-${topic}`);
	});
</script>

<svg class={['map', classes]} viewBox="0 0 1000 840" data-topic={topic}>
	<!-- South East Asia -->
	{#if region == 'seasia'}
		<CirclesSeasia />

		<!-- Europe -->
	{:else if region == 'europe'}
		<CirclesEurope />
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
	:global(.bigger) {
		r: 12px;
	}
	:global(.fill-Heilmann) {
		fill: var(--color-warning-900);
	}
	:global(.fill-Neuhaus) {
		fill: var(--color-success-900);
	}
	:global(.fill-Biel) {
		fill: var(--color-error-900);
	}
</style>
