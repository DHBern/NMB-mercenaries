<script lang="ts">
	import CirclesFull from '$lib/circle-components/Circles-full.svelte';
	import { base } from '$app/paths';
	import Ping from '$lib/components/Ping.svelte';
	import { onNavigate } from '$app/navigation';
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

<a href={localizeHref(`${base}/map`)} class="absolute top-[19vh] left-[20vw] w-90">
	<svg class="fullmap border-4 border-white" viewBox="0 0 1000 840">
		<rect x="0" y="0" width="1000" height="840" fill="white" class="cursor-pointer" />
		<CirclesFull />
	</svg>
	<div class="btn btn-lg absolute -top-3 left-9 h-10 w-10">
		<span class="rounded bg-white px-2 text-base font-semibold text-black"
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
