<script lang="ts">
	import type { PageData } from '../$types';
	import { base } from '$app/paths';
	import Circles_full from '$lib/circle-components/Circles-full.svelte';
	import colors from '$lib/colors.json';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen items-center justify-center">
	<svg class="map max-h-[calc(100vh/12*10)]" viewBox="0 0 1000 840">
		<!-- Rectangle for fill color -->
		<rect x="70" y="250" width="210" height="170" fill="var(--color-secondary-950)" class="cursor-pointer" />
		<rect x="550" y="510" width="130" height="110" fill="var(--color-secondary-950)" class="cursor-pointer" />

		<!-- Circles -->
		<Circles_full />

		<!-- Rectangle for frame and link (must be over circles with transparent color) -->
		<a href="{base}map/europe" class="">
			<rect
				x="70"
				y="250"
				width="210"
				height="170"
				fill="#ffffff00"
				stroke="white"
				stroke-width="4"
				class="cursor-pointer"
			/>
		</a>
		<a href="{base}map/seasia" class="">
			<rect
				x="550"
				y="510"
				width="130"
				height="110"
				fill="#ffffff00"
				stroke="white"
				stroke-width="4"
				class="cursor-pointer"
			/>
		</a>

		<foreignObject x="60" y="240" width="90" height="36">
			<a href="{base}map/europe" class="btn btn-lg bg-white px-2 py-1 text-surface-900 font-semibold">Europa</a>
		</foreignObject>

		<foreignObject x="540" y="500" width="140" height="36">
			<a href="{base}map/seasia" class="btn btn-lg bg-white px-2 py-1 text-surface-900 font-semibold">Südostasien</a>
		</foreignObject>
	</svg>
</div>

<style>
	img.hidden {
		display: none;
	}
	.map :global(circle) {
		fill: #d9d9d9;
	}
</style>
