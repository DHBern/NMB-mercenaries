<script lang="ts">
	import type { PageData } from '../$types';
	import Map_full from './Map_full.svelte';

	let { data }: { data: PageData } = $props();

</script>

<div class="h-full w-full">
	<Map_full />
</div>

<style>
	img.hidden {
		display:none;
	}
	:root {
		--state: 3; /* 1 = java, 2 = rivers, 3 = europe */
	}
</style>
