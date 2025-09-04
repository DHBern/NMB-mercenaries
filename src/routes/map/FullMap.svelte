<script lang="ts">
	import CanvasFullMap from './CanvasFullMap.svelte';
	import rValues from './rValues_fullMap.json';
	import { base } from '$app/paths';
	import Ping from '$lib/components/Ping.svelte';
	import { onNavigate } from '$app/navigation';
	import { navigateWithoutHistory } from './navigateWithoutHistory';
	import { m } from '$lib/paraglide/messages';
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
</script>

<a
	href={localizeHref(`${base}/map`)}
	onclick={(ev) => {
		navigateWithoutHistory(ev, localizeHref(`${base}/map`));
	}}
	class="absolute right-7 bottom-5 w-120"
>
	<CanvasFullMap {rValues} classes="rounded-md border-2 border-black bg-white p-1" />
	<svg class="fullmap" viewBox="0 0 1500 840">
		<rect x="0" y="0" width="1500" height="840" fill="white" class="cursor-pointer" />
	</svg>
	<div class="btn btn-lg absolute -top-3 left-9 h-10 w-10">
		<span class="rounded bg-white px-2 text-xl font-semibold text-black"
			>{m.moving_civil_fly_hunt()}</span
		>
		<Ping classes="absolute top-2 -left-11 size-4" setWhite={true} {isPulsating} />
	</div>
</a>

<style>
	.fullmap :global(circle) {
		fill: var(--color-surface-600);
	}
</style>
