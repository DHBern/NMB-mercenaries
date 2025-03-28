<script lang="ts">
	import * as d3 from 'd3';
	import data from '$lib/data/main.json';

	let { width, height, topic: currenttopic, year: currentyear } = $props();

	const colors = ['#FF5733', '#33FF57', '#3357FF'];
	const PADDING = 20;

	const years = [
		...new Set(Object.values(data).flatMap((content) => content.map((datapoint) => datapoint.Jahr)))
	].sort((a, b) => a - b);
	const x = d3
		.scaleLinear()
		.domain([years[0], years[years.length - 1]])
		.range([PADDING, width - PADDING]);
	const y = d3
		.scaleBand()
		.domain(['Up', 'Heilmann', 'Brunnen', 'Neuhaus', 'Down'])
		.range([0, height])
		.padding(0.2);

	// const lineGenerator = d3
	// 	.line()
	// 	.x((d) => x(d.Jahr))
	// 	.y((d) => (d.Ort === 'Biel' ? y('Up') : y('Down')));

	let svgElement;
</script>

<svg {width} {height} bind:this={svgElement}>
	{#each Object.entries(data) as [topic, content], i}
		<g>
			<foreignObject x="1" y={i * 100 + 1} width="100" height="100">
				<div class="text-xs text-gray-500">{topic}</div>
			</foreignObject>
			{#each content as datapoint, j}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="/timeline/{topic}/{datapoint.Jahr}">
					<circle
						cx={x(datapoint.Jahr)}
						cy={datapoint.Ort === 'Biel' ? y(topic) : y(i === 0 ? 'Up' : 'Down')}
						r="5"
						fill={colors[i]}
					/>
				</a>
			{/each}
		</g>
	{/each}
</svg>
