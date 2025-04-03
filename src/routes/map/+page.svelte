<script lang="ts">
	import type { PageData } from '../$types';
	import Map_full from './Map_full.svelte';
	import colors from '$lib/colors.json';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-[calc(100vh/12*11)] max-h-[calc(100vh/12*11)] items-center justify-center">
	<Map_full />
	<a href="../timeline/Heilmann/1829" class={['btn absolute font-bold left-180 top-80', colors['preset-filled']['Heilmann']]}>Neapel</a>
	<a href="../timeline/Neuhaus/1829" class={['btn absolute font-bold left-250 top-110', colors['preset-filled']['Neuhaus']]}>Java</a>
	<a href="../timeline/Brunnen/1798" class={['btn absolute font-bold left-140 top-150', colors['preset-filled']['Brunnen']]}>Biel</a>
</div>

<style>
	img.hidden {
		display: none;
	}
	:root {
		--state: 3; /* 1 = java, 2 = rivers, 3 = europe */
	}
</style>
