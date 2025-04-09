<script lang="ts">
	import type { PageData } from '../$types';
	import { base } from '$app/paths';
	import Map_full from './Map_full.svelte';
	import { colors } from '$lib/metadata.json';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen items-center justify-center">
	<svg class="max-h-[calc(100vh/12*10)]" viewBox="0 0 800 800">
		<Map_full />

		<a href="{base}europe" class="btn">
			<rect
				x="50"
				y="130"
				width="300"
				height="300"
				fill="none"
				stroke="white"
				stroke-width="4"
				class="cursor-pointer"
			/>
		</a>
		<foreignObject x="50" y="130" width="140" height="40">
			<a href="{base}map/europe" class="bg-white px-4 py-1">Europa</a>
		</foreignObject>

		<a href="{base}seasia" class="btn">
			<rect
				x="550"
				y="530"
				width="200"
				height="140"
				fill="none"
				stroke="white"
				stroke-width="4"
				class="cursor-pointer"
			/>
		</a>
		<foreignObject x="550" y="530" width="140" height="40">
			<a href="{base}map/seasia" class="bg-white px-4 py-1">Südostasien</a>
		</foreignObject>

		<foreignObject x="200" y="355" width="100" height="40">
			<a
				href="../timeline/Heilmann/1829"
				class={['btn font-bold', colors['preset-filled']['Heilmann']]}>Neapel</a
			>
		</foreignObject>
		<foreignObject x="645" y="585" width="100" height="40">
			<a
				href="../timeline/Neuhaus/1829"
				class={['btn font-bold', colors['preset-filled']['Neuhaus']]}>Java</a
			>
		</foreignObject>
		<foreignObject x="185" y="325" width="100" height="40">
			<a
				href="../timeline/Brunnen/1798"
				class={['btn font-bold', colors['preset-filled']['Brunnen']]}>Biel</a
			>
		</foreignObject>
	</svg>
</div>

<style>
	img.hidden {
		display: none;
	}
	:root {
		--state: 3; /* 1 = java, 2 = rivers, 3 = europe */
	}
</style>
