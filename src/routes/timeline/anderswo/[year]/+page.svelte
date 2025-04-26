<script lang="ts">
	import { scaleLinear, scalePoint, line, axisBottom, select } from 'd3';
	import mainContent from '$lib/data/main.json';
	import contentAnderswo from '$lib/data/anderswo.json';
	import { colors } from '$lib/metadata.json';
	import { base } from '$app/paths';
	import { onNavigate } from '$app/navigation';

	let isPulsating = $state(false);
	let timerPing = setTimeout(() => {
		isPulsating = true;
	}, 100);

	let timers = $state([]);
	onNavigate(() => {
		clearTimeout(timerPing);
		timers.forEach((timer) => {
			clearTimeout(timer);
		});
	});

	let width = $state();
	let height = $state();

	let { data } = $props();

	const PADDING = 30;
	const GUTTER = 220;

	const nRandomSlots = 100;
	const years = [
		...new Set(
			Object.values(mainContent).flatMap((content) => content.map((datapoint) => datapoint.Jahr))
		)
	].sort((a, b) => a - b);
	let x = $derived(
		scaleLinear()
			.domain([years[0], years[years.length - 1]])
			.range([GUTTER, width - PADDING])
	);
	let y = $derived(
		scalePoint()
			.domain(Array.from(Array(nRandomSlots).keys()))
			.range([PADDING + 150, height - PADDING])
			.padding(0.2)
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
					.tickValues(generateTickValues(data.year))
			);
		}
	});

	// Create states-array and set ~5% to true
	let states = $state(Array(contentAnderswo.length).fill(false));
	const nTrue = Math.floor(states.length * 0.05);
	for (let i = 0; i < nTrue; i++) {
		const randomIndex = Math.floor(Math.random() * states.length);
		states[randomIndex] = true;
		// flip back to false
		let timer = setTimeout(
			() => {
				states[randomIndex] = false;
			},
			Math.random() * 15000 + 2000
		);
		timers.push(timer);
	}

	function flipTrue() {
		// flip a random state to true
		const randomIndex = Math.floor(Math.random() * states.length);
		states[randomIndex] = true;

		// flip back to false
		let timer1 = setTimeout(
			() => {
				states[randomIndex] = false;
			},
			Math.random() * 2000 + 8000
		);
		timers.push(timer1);

		// flip next state to true
		let timer2 = setTimeout(() => flipTrue(), Math.random() * 2000 + 1000);
		timers.push(timer2);
	}

	// Start flipping
	let timer = setTimeout(() => flipTrue(), Math.random() * 500 + 1000);
	timers.push(timer);

	// Indices where states is true
	let trueIndices = $derived.by(() => {
		let trueIndices = [];
		states.forEach((state, index) => {
			if (state) trueIndices.push(index);
		});
		return trueIndices;
	});
</script>

<div class="absolute ml-10">
	<h1 class="h1">Was sonst noch war...</h1>
	<p class="mb-4 w-200">Klicke auf die Punkte und erfahre mehr über den historischen Kontext.</p>
	<button
		class="btn btn-lg preset-outlined-primary-500 bg-surface-50 h-12 w-40 font-semibold"
		onclick={() => {
			history.back();
		}}>Zurück</button
	>
</div>
<div
	class="mx-[calc(50%-50vw+2rem)] h-full w-[calc(100vw-4rem)]"
	bind:clientWidth={width}
	bind:clientHeight={height}
>
	<svg {width} {height} bind:this={svgElement}>
		{#each contentAnderswo as datapoint, j}
			{@const cx = x(datapoint.Jahr) || 0}
			{@const cy =
				(datapoint.yPos ? y(datapoint.yPos) : y(Math.floor(Math.random() * nRandomSlots))) || 0}
			<!-- svelte-ignore a11y_consider_explicit_label -->
			<g id="anderswo_{j}" class={['z-10', states[j] && 'z-20']}>
				<a href="{base}/detail/{encodeURIComponent(datapoint.Titel)}_{datapoint.Jahr}">
					<foreignObject
						x={cx - 250}
						y={(cy - 60 || 0) - 11}
						width="500"
						height="70"
						style="transform-origin: {cx - 250}px {cy - 60}px"
					>
						<p
							class={[
								'transition-[font-size, opacity]  text-center text-base text-gray-500 opacity-20 duration-1000',
								states[j] && ' text-xl font-bold opacity-100'
							]}
						>
							{@html datapoint.Titel}
						</p>
					</foreignObject>
					<circle
						{cx}
						{cy}
						r={states[j] ? 13 : 10}
						class={[
							colors.fill.anderswoLight,
							states[j] && colors.fill.anderswoDark,
							states[j] && isPulsating && 'origin-center opacity-50'
						]}
						style="transform-origin: {cx}px {cy}px"
					/>
				</a>
			</g>
		{/each}

		<!-- Workaround to bring nodes to front whose state is currently true 
		 (needed, since z-index does not work inside svg) 
		 Unfortunately, this will re-add the ping-animation ever-again, leading to non-stop pinging, 
		 which is why ping is removed from the circles.
		 
		 -->
		{#each trueIndices as idx}
			<use xlink:href="#anderswo_{idx}" />
		{/each}
	</svg>
</div>
