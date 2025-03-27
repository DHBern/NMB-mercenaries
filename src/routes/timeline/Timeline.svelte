<script lang="ts">
	import * as d3 from 'd3';
	import data from '$lib/data/main.json';

	let { width, height, topic, year } = $props();

	const colors = ['#FF5733', '#33FF57', '#3357FF'];

	let svgElement;
</script>

<svg {width} {height} bind:this={svgElement}>
	{#each Object.entries(data) as [topic, content], i}
		<g>
			<foreignObject x="1" y={i * 100 + 1} width="100" height="100">
				<div xmlns="http://www.w3.org/1999/xhtml" class="text-xs text-gray-500">{topic}</div>
			</foreignObject>
			{#each content as datapoint, j}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="/timeline/{topic}/{datapoint.Jahr}">
					<circle cx={j + 1} cy={datapoint.Ort === 'Biel' ? i + 2 : i - 1} r="5" fill={colors[i]} />
				</a>
			{/each}
		</g>
	{/each}
</svg>
