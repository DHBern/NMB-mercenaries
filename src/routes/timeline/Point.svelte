<script lang="ts">
	import * as d3 from 'd3';

	let { x, y, topic, year } = $props();
	let hover = $state(false);
</script>

{#if hover}
	<div class="popover">
		<p>{title}</p>
	</div>
{/if}
<!-- svelte-ignore a11y_consider_explicit_label -->
<a href={`/timeline/${topic}/${year}`}>
	<circle cx={x} cy={y} r="5" fill="black" />
</a>
