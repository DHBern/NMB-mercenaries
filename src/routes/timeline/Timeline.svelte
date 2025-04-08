<script lang="ts">
	import { scaleLinear, scalePoint, line, axisBottom, select } from 'd3';
	import data from '$lib/data/main.json';
	import colors from '$lib/colors.json';
	import { base } from '$app/paths';

	let { width, height, topic: currenttopic, year: currentyear } = $props();

	const PADDING = 30;
	const GUTTER = 220;

	const years = [
		...new Set(Object.values(data).flatMap((content) => content.map((datapoint) => datapoint.Jahr)))
	].sort((a, b) => a - b);
	let x = $derived(
		scaleLinear()
			.domain([years[0], years[years.length - 1]])
			.range([GUTTER, width - PADDING])
	);
	let y = $derived(
		scalePoint()
			.domain(['Up', 'Heilmann', 'Brunnen', 'Neuhaus', 'Down'])
			.range([0, height - PADDING])
			.padding(0.4)
	);
	let svgElement: SVGSVGElement;
	let gx: SVGGElement;
	const generateTickValues = (current: number) => {
		let returnvalues = [];
		for (
			let activeyear = Math.ceil(years[0] / 10) * 10;
			!(activeyear >= years[years.length - 1]);
			activeyear += 10
		) {
			if (activeyear < current - 3 || activeyear > current + 3) {
				returnvalues.push(activeyear);
			}
		}
		console.log(returnvalues);
		return returnvalues;
	};
	$effect(() => {
		if (gx) {
			select(gx).call(
				axisBottom(x)
					.tickFormat((d) => `${d}`)
					.tickValues(generateTickValues(currentyear))
			);
		}
	});
</script>

<svg {width} {height} bind:this={svgElement}>
	<g bind:this={gx} transform="translate(0,{height - PADDING})" class="x-axis" />
	<text class="translate-x-[-2ch] font-sans text-xl font-black" x={x(currentyear)} y={height - 5}>
		{currentyear}
	</text>
	<line
		x1={x(currentyear)}
		y1={0}
		x2={x(currentyear)}
		y2={height - PADDING + 6}
		stroke="black"
		stroke-width="1"
	/>
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
				<div class={['text-sm', topic === currenttopic ? colors.text[topic] : 'text-gray-500']}>
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
				class={[colors.stroke[topic]]}
				stroke-width="2"
				fill="none"
				stroke-linecap="round"
			/>
			{#each content as datapoint, j}
				{@const current = datapoint.Jahr === currentyear && topic === currenttopic}
				<!-- svelte-ignore a11y_consider_explicit_label -->
				<a href="{base}/timeline/{topic}/{datapoint.Jahr}">
					<circle
						class:animate-pulse={current}
						cx={x(datapoint.Jahr)}
						cy={(datapoint.Ort === 'Biel' ? y(topic) : y(i === 0 ? 'Up' : 'Down')) || 0}
						r={current ? 12 : 6}
						class={[colors.fill[topic]]}
					/>
				</a>
			{/each}
		</g>
	{/each}
</svg>
