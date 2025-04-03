<script lang="ts">
	import type { PageData } from '../$types';
	import Map_full from './Map_full.svelte';
	import colors from '$lib/colors.json';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen justify-center items-center">
	<svg class="absolute top-0 left-0 max-h-[calc(100vh/12*10)]" viewBox="0 0 800 800">
		
		<Map_full />

		<foreignObject x="200" y="355" width="100" height="40">
			<a href="../timeline/Heilmann/1829" class={["btn font-bold", colors['preset-filled']['Heilmann']]}>Neapel</a>
		</foreignObject>
		<foreignObject x="645" y="585" width="100" height="40">
			<a href="../timeline/Neuhaus/1829" class={["btn font-bold", colors['preset-filled']['Neuhaus']]}>Java</a>
		</foreignObject>
		<foreignObject x="185" y="325" width="100" height="40">
			<a href="../timeline/Brunnen/1798" class={["btn font-bold", colors['preset-filled']['Brunnen']]}>Biel</a>
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
