<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';

	import Timeline from './Timeline.svelte';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	let width = $state(0);
	let height = $state(0);
</script>

{@render children()}
<div
	class="mx-[calc(50%-50vw+2rem)] h-[90vh] w-[calc(100vw-4rem)]"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<Timeline {width} {height} {data} />
</div>
