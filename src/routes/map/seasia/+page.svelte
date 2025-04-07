<script lang="ts">
	import type { PageData } from '../$types';
	import { base } from '$app/paths';
	import Map_seasia from './Map_seasia.svelte';
	import colors from '$lib/colors.json';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen items-center justify-center">
	<svg class="max-h-[calc(100vh/12*10)]" viewBox="0 0 800 800">
		<Map_seasia />

		<foreignObject x="0" y="0" width="140" height="40">
			<a href="{base}/map" class="bg-white px-4 py-1">zur Weltkarte</a>
		</foreignObject>

		<foreignObject x="600" y="550" width="100" height="40">
			<a
				href="../timeline/Neuhaus/1836"
				class={['btn font-bold', colors['preset-filled']['Neuhaus']]}>Borneo</a
			>
		</foreignObject>
		<foreignObject x="550" y="650" width="150" height="40">
			<a
				href="../timeline/Neuhaus/1829"
				class={['btn font-bold', colors['preset-filled']['Neuhaus']]}>Batavia, Java</a
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
