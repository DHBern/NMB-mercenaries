<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import Timeline from './Timeline.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();
	let width = $state(0);
	let height = $state(0);
</script>

<div class="grid h-full max-h-full grid-rows-[auto_320px] gap-4 p-4 transition-all duration-300">
	{@render children()}
	<div
		class="mx-[calc(50%-50vw+2rem)] w-[calc(100vw-4rem)]"
		bind:clientWidth={width}
		bind:clientHeight={height}
	>
		<Timeline {width} {height} topic={data.topic} currentyear={data.currentyear} />
	</div>
</div>