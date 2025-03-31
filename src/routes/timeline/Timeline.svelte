<script lang="ts">
	import { scaleLinear, scaleBand, line } from 'd3';
	import data from '$lib/data/main.json';

	let { width, height, topic: currenttopic, year: currentyear } = $props();

	const colors = ['#FF5733', '#33FF57', '#3357FF'];
	const PADDING = 20;

	const years = [
		...new Set(Object.values(data).flatMap((content) => content.map((datapoint) => datapoint.Jahr)))
	].sort((a, b) => a - b);
	const x = $derived(
		scaleLinear()
			.domain([years[0], years[years.length - 1]])
			.range([PADDING, width - PADDING])
	);
	const y = $derived(
		scaleBand()
			.domain(['Up', 'Heilmann', 'Brunnen', 'Neuhaus', 'Down'])
			.range([0, height])
			.padding(0.2)
			.round(true)
	);

	let svgElement;
</script>

<svg {width} {height} bind:this={svgElement}>
	{#each Object.entries(data) as [topic, content], i}
		<g>
			<foreignObject x="1" y={y(topic)} width="100" height="100">
				<div class={['text-sm', topic === currenttopic ? 'text-primary-500' : 'text-gray-500']}>
					{topic}
				</div>
			</foreignObject>
			<path
				d={line()(
					content.map((datapoint) => [
						x(datapoint.Jahr),
						(datapoint.Ort === 'Biel' ? y(topic) : y(i === 0 ? 'Up' : 'Down')) || 0
					])
				)}
				stroke={colors[i]}
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
			/>
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
