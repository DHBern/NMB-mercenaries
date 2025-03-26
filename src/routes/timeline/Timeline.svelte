<script lang="ts">
	import * as d3 from 'd3';

	let { width, height, data } = $props();
</script>

<svg>
	{#each data as datapoint}
		<Point {datapoint} />
	{/each}
</svg>
