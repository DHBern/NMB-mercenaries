<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	import Timeline from './Timeline.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let width = $state(0);
	let height = $state(0);
</script>

<div class="mx-6 mt-4">
	{@render children()}
</div>
<div
	class="mx-[calc(50%-50vw+2rem)] mt-4 h-48 w-[calc(100vw-4rem)]"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<Timeline {width} {height} topic={data.topic} year={data.year} />
</div>
