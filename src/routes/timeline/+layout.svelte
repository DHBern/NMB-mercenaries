<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	import Timeline from './Timeline.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let width = $state(0);
	let height = $state(0);
</script>
<div class="grid grid-rows-[auto_192px] h-full max-h-full py-10 gap-4">
	
	<div class="mx-6">
		{@render children()}
	</div>
	<div
		class="mx-[calc(50%-50vw+2rem)] w-[calc(100vw-4rem)]"
		bind:clientWidth={width}
		bind:clientHeight={height}
	>
		<Timeline {width} {height} topic={data.topic} year={data.year} />
	</div>
</div>
