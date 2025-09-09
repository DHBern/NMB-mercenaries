<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { m } from '$lib/paraglide/messages.js';
	import CirclesEurope from '$lib/circle-components/Circles-europe-150-reduced.svelte';
	import { colors } from '$lib/metadata.json';
	import FullMap from '../FullMap.svelte';
	import { onNavigate } from '$app/navigation';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { page } from '$app/state';

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
	function applyStyles(qSel, color) {
		const elements = document.querySelectorAll(qSel);
		elements.forEach((el) => {
			el?.style.setProperty('r', '8px');
			el?.style.setProperty('fill', `var(--color-${color}-500)`);
			el?.addEventListener('click', () => {
				goto(url);
			});
		});
	}
	function addClickListener(qSel, url) {
		const elements = document.querySelectorAll(qSel);
		elements.forEach((el) => {
			el?.addEventListener('click', () => {
				goto(url);
			});
		});
	}

	onMount(() => {
		applyStyles('.europe-biel', 'error');
		applyStyles('.europe-neapel', 'warning');
		applyStyles('.europe-heidelberg', 'warning');
		applyStyles('.europe-wien', 'warning');
		applyStyles('.europe-halle', 'warning');
		applyStyles('.europe-baryssau', 'success');
		applyStyles('.europe-franche', 'success');
		applyStyles('.europe-hertogenbosch', 'success');
		applyStyles('.europe-hulst', 'success');
		applyStyles('.europe-rotterdam', 'success');

		// add to pings
		addClickListener('use.europe-biel-ping', `${base}/timeline/Biel/1798`);
		addClickListener('use.europe-neapel-ping', `${base}/timeline/Heilmann/1829`);
		addClickListener('use.europe-heidelberg-ping', `${base}/timeline/Heilmann/1804`);
		addClickListener('use.europe-wien-ping', `${base}/timeline/Heilmann/1814`);
		addClickListener('use.europe-halle-ping', `${base}/timeline/Heilmann/1829`);
		addClickListener('use.europe-baryssau-ping', `${base}/timeline/Neuhaus/1812`);
		addClickListener('use.europe-franche-ping', `${base}/timeline/Neuhaus/1815`);
		addClickListener('use.europe-hertogenbosch-ping', `${base}/timeline/Neuhaus/1816`);
		addClickListener('use.europe-hulst-ping', `${base}/timeline/Neuhaus/1831`);
		addClickListener('use.europe-rotterdam-ping', `${base}/timeline/Neuhaus/1843`);
	});
</script>

<div class="absolute top-0 left-0 !z-10 h-screen w-full items-center justify-center">
	<FullMap />

	<!-- Region Map -->
	<svg
		class="map max-h-[calc(100vh)] w-screen bg-[url(/src/lib/mapimages/Map_europe.png)]"
		viewBox="0 0 1500 840"
	>
		<CirclesEurope {isPulsating} />

		<foreignObject id="europe-biel" x="625" y="415" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Biel/1798`)}
				class={['btn font-semibold', colors['preset-filled']['Biel']]}
				>{m.spicy_equal_sparrow_bake()}</a
			>
		</foreignObject>
		<foreignObject id="europe-neapel" x="775" y="570" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Heilmann/1829`)}
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}
				>{m.awful_major_shell_cut()}</a
			>
		</foreignObject>
		<foreignObject id="europe-heidelberg" x="625" y="325" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Heilmann/1804`)}
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}
				>{m.lower_inner_shrike_build()}</a
			>
		</foreignObject>
		<foreignObject id="europe-wien" x="840" y="395" width="100" height="50">
			<a
				href={localizeHref(`${base}/timeline/Heilmann/1814`)}
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}
				>{m.stock_witty_sawfish_devour()}</a
			>
		</foreignObject>
		<foreignObject id="europe-halle" x="735" y="265" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Heilmann/1829`)}
				class={['btn font-semibold', colors['preset-filled']['Heilmann']]}
				>{m.wide_next_marmot_value()}</a
			>
		</foreignObject>
		<foreignObject id="europe-baryssau" x="1115" y="165" width="100" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1812`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}
				>{m.patient_pink_nuthatch_splash()}</a
			>
		</foreignObject>
		<foreignObject id="europe-franche" x="415" y="415" width="185" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1815`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}
				>{m.candid_many_shell_dare()}</a
			>
		</foreignObject>
		<foreignObject id="europe-hertogenbosch" x="545" y="265" width="180" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1816`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}
				>{m.bright_inner_pigeon_link()}</a
			>
		</foreignObject>
		<foreignObject id="europe-hulst" x="440" y="205" width="100" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1831`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}
				>{m.full_muddy_ostrich_leap()}</a
			>
		</foreignObject>
		<foreignObject id="europe-rotterdam" x="555" y="195" width="150" height="50">
			<a
				href={localizeHref(`${base}/timeline/Neuhaus/1843`)}
				class={['btn font-semibold', colors['preset-filled']['Neuhaus']]}
				>{m.fair_zany_mantis_favor()}</a
			>
		</foreignObject>

		<!-- Pull marked circles to front -->
		<use class="europe-biel" xlink:href="#europe-biel" />
		<use class="europe-neapel" xlink:href="#europe-neapel" />
		<use class="europe-heidelberg" xlink:href="#europe-heidelberg" />
		<use class="europe-wien" xlink:href="#europe-wien" />
		<use class="europe-halle" xlink:href="#europe-halle" />
		<use class="europe-baryssau" xlink:href="#europe-baryssau" />
		<use class="europe-franche" xlink:href="#europe-franche" />
		<use class="europe-hertogenbosch" xlink:href="#europe-hertogenbosch" />
		<use class="europe-hulst" xlink:href="#europe-hulst" />
		<use class="europe-rotterdam" xlink:href="#europe-rotterdam" />
		<use class="europe-biel-ping" xlink:href="#europe-biel-ping" />
		<use class="europe-neapel-ping" xlink:href="#europe-neapel-ping" />
		<use class="europe-heidelberg-ping" xlink:href="#europe-heidelberg-ping" />
		<use class="europe-wien-ping" xlink:href="#europe-wien-ping" />
		<use class="europe-halle-ping" xlink:href="#europe-halle-ping" />
		<use class="europe-baryssau-ping" xlink:href="#europe-baryssau-ping" />
		<use class="europe-franche-ping" xlink:href="#europe-franche-ping" />
		<use class="europe-hertogenbosch-ping" xlink:href="#europe-hertogenbosch-ping" />
		<use class="europe-hulst-ping" xlink:href="#europe-hulst-ping" />
		<use class="europe-rotterdam-ping" xlink:href="#europe-rotterdam-ping" />
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
