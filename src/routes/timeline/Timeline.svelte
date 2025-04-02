<script lang="ts">
	import { scaleLinear, scalePoint, line } from 'd3';
	import data from '$lib/data/main.json';

	let { width, height, topic: currenttopic, year: currentyear } = $props();

	const colors = ['#FF5733', '#33FF57', '#3357FF'];
	const PADDING = 20;
	const GUTTER = 220;

	const years = [
		...new Set(Object.values(data).flatMap((content) => content.map((datapoint) => datapoint.Jahr)))
	].sort((a, b) => a - b);
	let x = $derived(
		scaleLinear()
			.domain([years[0], years[years.length - 1]])
			.range([PADDING + GUTTER, width - PADDING])
	);
	let y = $derived(
		scalePoint()
			.domain(['Up', 'Heilmann', 'Brunnen', 'Neuhaus', 'Down'])
			.range([0, height])
			.padding(0.4)
	);
	let svgElement;
	$inspect(currentyear);
</script>

<svg {width} {height} bind:this={svgElement}>
	{#each ['Up', 'Down'] as wrapper}
		<foreignObject x="1" y={(y(wrapper) || 0) - 11} width="100" height="22">
			<div class={['text-sm', 'text-gray-500']}>Andernorts</div>
		</foreignObject>
	{/each}
	<foreignObject x="1" y={(y('Brunnen') || 0) - 11} width="100" height="22">
		<div class={['text-sm', 'text-gray-500']}>Biel</div>
	</foreignObject>

	{#each Object.entries(data) as [topic, content], i}
		<g>
			<foreignObject x="70" y={(y(topic) || 0) - 11} width="100" height="22">
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
						class:animate-pulse={datapoint.Jahr === currentyear}
						cx={x(datapoint.Jahr)}
						cy={(datapoint.Ort === 'Biel' ? y(topic) : y(i === 0 ? 'Up' : 'Down')) || 0}
						r={datapoint.Jahr === currentyear ? 12 : 6}
						fill={colors[i]}
					/>
				</a>
			{/each}
		</g>
	{/each}
</svg>
