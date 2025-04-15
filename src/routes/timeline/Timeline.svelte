<script lang="ts">
	import { scaleLinear, scalePoint, line, axisBottom, select } from 'd3';
	import data from '$lib/data/main.json';
	import { colors, labels } from '$lib/metadata.json';
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
			.range([PADDING, height - PADDING])
			.padding(0.2)
	);
	let yLocal = $derived(
		scalePoint()
			.domain(['Up', 'Heilmann', 'Brunnen', 'Neuhaus', 'Down'])
			.range([PADDING, height - PADDING])
			.padding(1.5)
	);
	let svgElement: SVGSVGElement;
	let gx: SVGGElement;
	const generateTickValues = (current: number) => {
		let returnvalues = [];
		for (let i = Math.ceil(years[0] / 10) * 10; i <= years[years.length - 1]; i += 10) {
			if (Math.abs(i - current) > 3) {
				returnvalues.push(i);
			}
		}
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

	const lineGenerator = (topic: string, content: any[], index: number) => {
		let coords = content.map((datapoint) => [
			x(datapoint.Jahr),
			(datapoint.Ort === 'Biel' ? yLocal(topic) : y(index === 0 ? 'Up' : 'Down')) || 0
		]);
		if (topic === 'Brunnen') {
			coords = [
				[x(x.domain()[0]) + 90, y(topic) as number],
				...coords,
				[x(x.domain()[x.domain().length - 1]), yLocal(topic) as number]
			];
		}
		return line()(coords);
	};
</script>

<svg {width} {height} bind:this={svgElement}>
	<defs>
		<linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
			<stop offset="0%" style="stop-color: #fff; stop-opacity: 0" />
			<stop offset="5%" style="stop-color: var(--color-error-500); stop-opacity: 0.3" />
			<stop offset="98%" style="stop-color: var(--color-error-500); stop-opacity: 0.3" />
			<stop offset="100%" style="stop-color: #fff; stop-opacity: 0" />
		</linearGradient>
	</defs>
	<rect
		x={0}
		y={(yLocal('Heilmann') as number) - 20}
		width={width - PADDING + 18}
		height={yLocal.step() * 3}
		fill="url(#gradient)"
	/>
	<g bind:this={gx} transform="translate(0,{height - PADDING})" class="x-axis text-sm" />
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
		<foreignObject x="1" y={(y(wrapper) || 0) - 11} width="100" height="30">
			<div class={['text-sm text-gray-500']}>Global</div>
		</foreignObject>
	{/each}
	<foreignObject x="1" y={(y('Brunnen') || 0) - 11} width="100" height="30">
		<div class={['text-sm text-gray-500']}>Lokal</div>
	</foreignObject>

	{#each Object.entries(data) as [topic, content], i}
		<g>
			<text
				x="70"
				y={(yLocal(topic) || 0) + 5}
				class={[
					'font-bold',
					colors.fill[topic],
					topic === currenttopic && 'font-black text-2xl',
					topic !== currenttopic && 'text-lg'
				]}>{labels[topic]}</text
			>
			<path
				d={lineGenerator(topic, content, i)}
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
						class:animate-pulse={!current}
						cx={x(datapoint.Jahr)}
						cy={(datapoint.Ort === 'Biel' ? yLocal(topic) : y(i === 0 ? 'Up' : 'Down')) || 0}
						r={current ? 18 : 10}
						class={[colors.fill[topic], !current && 'origin-center animate-ping opacity-75']}
					/>
					<circle
						cx={x(datapoint.Jahr)}
						cy={(datapoint.Ort === 'Biel' ? yLocal(topic) : y(i === 0 ? 'Up' : 'Down')) || 0}
						r={current ? 18 : 6}
						class={[colors.fill[topic]]}
					/>
				</a>
			{/each}
		</g>
	{/each}
</svg>
