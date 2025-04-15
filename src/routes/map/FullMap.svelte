<script lang="ts">
	import CirclesFull from '$lib/circle-components/Circles-full.svelte';
	import { base } from '$app/paths';
	import Ping from '$lib/components/Ping.svelte';
</script>

<a href="{base}/map" class="absolute top-[19vh] left-[20vw] w-90">
	<svg class="fullmap border-4 border-white" viewBox="0 0 1000 840">
		<rect x="0" y="0" width="1000" height="840" fill="white" class="cursor-pointer" />
		<CirclesFull />
	</svg>
	<div class="btn btn-lg absolute left-9 -top-3 w-10 h-10">
		<span class="text-md rounded bg-white px-2 text-black font-semibold">Auszoomen</span>
		<Ping classes="absolute top-2 -left-11 size-4" setWhite={true} />
	</div>
</a>

<style>
	.fullmap :global(circle) {
		fill: var(--color-surface-600);
	}
</style>
