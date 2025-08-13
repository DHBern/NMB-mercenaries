<script lang="ts">
	import Canvas from './Canvas.svelte';
	import rValues from './rValues.json';

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

<Canvas {rValues} {region} {topic} classes="map" />

<svg class={['map', 'absolute top-0', classes]} viewBox="0 0 1000 840" data-topic={topic}>
	<!-- Highlighted circles -->
	{#if region === 'europe'}
		<circle
			id="europe-baryssau"
			class="marked europe-baryssau circle-18-90"
			cx="905"
			cy="185"
			r="4.3961"
		/>
		<circle
			id="europe-rotterdam"
			class="marked europe-rotterdam circle-27-36"
			cx="365"
			cy="275"
			r="3.4039"
		/>
		<circle
			id="europe-hertogenbosch"
			class="marked europe-hertogenbosch circle-28-37"
			cx="375"
			cy="285"
			r="4.2667"
		/>
		<circle
			id="europe-halle"
			class="marked europe-halle circle-28-55"
			cx="555"
			cy="285"
			r="4.3529"
		/>
		<circle
			id="europe-hulst"
			class="marked europe-hulst circle-29-35"
			cx="355"
			cy="295"
			r="4.1804"
		/>
		<circle
			id="europe-heidelberg"
			class="marked europe-heidelberg circle-35-47"
			cx="475"
			cy="355"
			r="4.3961"
		/>
		<circle id="europe-wien" class="marked europe-wien circle-40-66" cx="665" cy="405" r="4.3529" />
		<circle
			id="europe-franche"
			class="marked europe-franche circle-43-39"
			cx="395"
			cy="435"
			r="4.3961"
		/>
		<circle id="europe-biel" class="marked europe-biel circle-43-44" cx="445" cy="435" r="4.3961" />
		<circle
			id="europe-neapel"
			class="marked europe-neapel circle-62-59"
			cx="595"
			cy="625"
			r="4.1373"
		/>
	{:else}
		<circle
			id="seasia-banjarmasin"
			class="circle-46-70 marked seasia-banjarmasin"
			cx="705"
			cy="465"
			r="4.3961"
		/>
		<circle
			id="seasia-padangse"
			class="circle-56-40 marked seasia-padangse"
			cx="405"
			cy="565"
			r="3.9647"
		/>
		<circle
			id="seasia-batavia"
			class="circle-67-54 marked seasia-batavia"
			cx="545"
			cy="675"
			r="4.3529"
		/>
	{/if}
</svg>

<style>
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
