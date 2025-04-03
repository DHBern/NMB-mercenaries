<script lang="ts">
	import type { PageData } from '../$types';
	import Map_europe from './Map_europe.svelte';
	import colors from '$lib/colors.json';

	let { data }: { data: PageData } = $props();
</script>

<div class="flex h-screen items-center justify-center">
	<svg class="max-h-[calc(100vh/12*10)]" viewBox="0 0 800 800">
		<Map_europe />

        <foreignObject x="0" y="0" width="140" height="40">
			<a href="/map" class="bg-white px-4 py-1">zur Weltkarte</a>
		</foreignObject>

		<foreignObject x="500" y="600" width="100" height="40">
			<a
				href="../timeline/Heilmann/1829"
				class={['btn font-bold', colors['preset-filled']['Heilmann']]}>Neapel</a
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
