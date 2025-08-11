<script lang="ts">
	import portrait_heilmann from '$lib/images/portrait-heilmann-mono.jpg';
	import portrait_neuhaus from '$lib/images/portrait-neuhaus-mono.jpg';
	import portrait_brunnen from '$lib/images/portrait-brunnen-mono.jpg';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import Map from './Map.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Ping from '$lib/components/Ping.svelte';
	import { colors } from '$lib/metadata.json';
	import { onNavigate } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
	import { onMount } from 'svelte';
	import { localizeHref } from '$lib/paraglide/runtime';

	const images: any = import.meta.glob(['$lib/images/timeline/**.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	let { data }: { data: PageData } = $props();

	let portrait = $derived.by(() => {
		let portrait;
		switch (data.topic) {
			case 'Heilmann':
				portrait = portrait_heilmann;
				break;
			case 'Neuhaus':
				portrait = portrait_neuhaus;
				break;
			case 'Biel':
				portrait = portrait_brunnen;
				break;
		}
		return portrait;
	});

	let isPulsating = $state(false);
	let timerPing = setTimeout(() => {
		isPulsating = true;
	}, 15000);

	onNavigate(() => {
		isPulsating = false;
		clearTimeout(timerPing);
		timerPing = setTimeout(() => {
			isPulsating = true;
		}, 15000);
	});

	let title_slug = $state('');
	let place_slug = $state('');
	let text_slug = $state('');
	$effect(() => {
		if (data.locale == 'de') {
			title_slug = 'title_de';
			place_slug = 'place_de';
			text_slug = 'text_de';
		} else if (data.locale == 'fr') {
			title_slug = 'title_fr';
			place_slug = 'place_fr';
			text_slug = 'text_fr';
		} else {
			title_slug = 'title_de';
			place_slug = 'place_de';
			text_slug = 'text_de';
		}
	});
</script>

<div class="grid h-full max-h-full grid-cols-[1fr_3fr] gap-15">
	<!-- Orientation Box -->
	<div>
		<div class="relative">
			<a
				class=""
				href={localizeHref(
					`${base}/map/${data.mainContent?.MapRegion}?place=${data.mainContent?.MapPlace}`
				)}
			>
				<Map
					classes=""
					region={data.mainContent?.MapRegion}
					place={data.mainContent?.MapPlace}
					topic={data.topic}
				/>
				<div class="btn btn-lg absolute -top-2 left-7 h-10 w-10">
					<span class="rounded bg-white px-2 text-base text-lg font-semibold text-black"
						>{m.ok_sunny_thrush_radiate()}</span
					>
					<Ping classes="absolute bottom-0 -right-5 size-4" {isPulsating} />
				</div>
			</a>
			<img
				class="absolute top-[80%] left-[2%] max-h-[50%] max-w-[60%] opacity-100"
				src={portrait}
				alt="portrait"
			/>
			<div class="absolute top-[100%] left-[38%] flex grow-0 flex-col items-start justify-start">
				<div>
					<span class="text-5xl font-bold">{data.mainContent?.year}</span>
					<span class="text-4xl font-bold">in {data.mainContent?.[place_slug]}</span>
					{#if data.topic_label}<span class={['text-3xl font-bold', colors['text'][data.topic]]}
							>({@html data.topic_label})</span
						>{/if}
				</div>
			</div>
		</div>
	</div>

	<!-- Content Box -->
	<!-- //! As soon as screen arrives, replace auto in grid-rows with fixed height -->
	<div class="grid h-full grid-cols-[2fr_1fr] grid-rows-[200px-90px] gap-4">
		<div class="max-h-full overflow-y-auto">
			<!-- Content -->
			<h1 class="h1 mb-4">{data.mainContent?.[title_slug]}</h1>
			<p>
				{@html data.mainContent?.[text_slug]}
			</p>
		</div>

		<!-- Image -->
		<div class="relative col-start-2">
				<a
					class="absolute top-0 left-0"
					href={localizeHref(`${base}/detail/${data.mainContent?.Bild}`)}
				>
			{#if data.mainContent?.Bild}
					<img
						class="h-full max-h-140 w-full object-contain object-right"
						src={images['/src/lib/images/timeline/' + data.mainContent?.image + '.jpg']}
						alt="Detailbild"
					/>
					<Ping classes="absolute bottom-10 left-20 size-4" {isPulsating} />
				</a>
			{/if}
		</div>

		<!-- Navigation along timeline -->
		<div class="col-span-2 row-start-2 flex items-center justify-end gap-4">
			{#if data.prevYear}
				<a
					class={['btn-icon', colors['preset-filled'][data.topic], 'm-4', 'btn-icon-lg', 'w-50']}
					href={localizeHref(`${base}/timeline/${data.topic}/${data.prevYear}`)}
				>
					<ArrowLeft class="mr-3" />
					<span class="font-semibold">{m.wise_extra_leopard_zip()}</span>
				</a>
			{/if}
			{#if data.nextYear}
				<a
					class={['btn-icon', colors['preset-filled'][data.topic], 'm-4', 'btn-icon-lg', 'w-50']}
					href={localizeHref(`${base}/timeline/${data.topic}/${data.nextYear}`)}
				>
					<ArrowRight class="mr-3" />
					<span class="font-semibold">{m.funny_long_cheetah_forgive()}</span>
				</a>
			{/if}
		</div>
	</div>
</div>
