<script lang="ts">
	import portrait_heilmann from '$lib/images/portrait-heilmann-mono.jpg';
	import portrait_neuhaus from '$lib/images/portrait-neuhaus-mono.jpg';
	import portrait_brunnen from '$lib/images/portrait-biel-mono.jpg';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import Map from './Map.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Ping from '$lib/components/Ping.svelte';
	import { colors } from '$lib/metadata.json';
	import { onNavigate } from '$app/navigation';
	import { m } from '$lib/paraglide/messages.js';
	import { getLocale, localizeHref } from '$lib/paraglide/runtime';

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

	// Get language dependent data
	let title_slug = $state('');
	let place_slug = $state('');
	let text_slug = $state('');
	$effect(() => {
		if (getLocale() == 'de') {
			title_slug = 'title_de';
			place_slug = 'place_de';
			text_slug = 'text_de';
		} else if (getLocale() == 'fr') {
			title_slug = 'title_fr';
			place_slug = 'place_fr';
			text_slug = 'text_fr';
		} else {
			console.log('LOCALE = ', getLocale());
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
			<div class="bg-surface-50 absolute top-[83%] left-[2%] aspect-auto w-[40%] p-1">
				<img class="opacity-70" src={portrait} alt="portrait" />
			</div>
			<div class="absolute top-[100%] left-[45%] flex grow-0 flex-col items-start justify-start">
				<div>
					<span class="text-5xl font-bold">{data.mainContent?.year}</span>
					<br />
					<span class="text-4xl font-bold">{data.mainContent?.[place_slug]}</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Content Box -->
	<!-- //! As soon as screen arrives, replace auto in grid-rows with fixed height -->
	<div class="relative grid h-full grid-cols-[2fr_1fr] gap-20">
		<div class="max-h-full">
			<!-- Content -->
			<h1 class="mb-4 text-6xl">{data.mainContent?.[title_slug]}</h1>
			<p class={['max-h-[700px] overflow-auto pr-2 text-3xl']}>
				{@html data.mainContent?.[text_slug]}
			</p>
		</div>

		<!-- Image -->
		<div class="relative col-start-2">
			{#if data.mainContent?.image}
				<a
					class="absolute top-0 left-0"
					href={localizeHref(`${base}/detail/${data.mainContent?.image}`)}
				>
					<img
						class="h-full max-h-140 w-full object-contain object-right"
						src={images['/src/lib/images/timeline/' + data.mainContent?.image + '.jpg']}
						alt=""
					/>
					<Ping classes="absolute bottom-10 left-20 size-4" {isPulsating} />
				</a>
			{/if}
		</div>

		<!-- Navigation along timeline -->
		<div class="absolute bottom-0 col-span-1 flex w-2/3 items-center justify-between gap-4">
			<a
				class={[
					'btn-icon btn-icon-lg m-4 w-62 p-5 text-xl',
					colors['preset-filled'][data.topic],
					!data.prevYear && 'pointer-events-none cursor-default opacity-30'
				]}
				href={localizeHref(
					`${base}/timeline/${data.topic}/${data.prevYear || data.mainContent?.year}`
				)}
			>
				<ArrowLeft class="mr-3" />
				<span class="font-semibold">{m.wise_extra_leopard_zip()}</span>
			</a>
			<a
				class={[
					'btn-icon btn-icon-lg m-4 w-62 p-5 text-xl',
					colors['preset-filled'][data.topic],
					!data.nextYear && 'pointer-events-none cursor-default opacity-30'
				]}
				href={localizeHref(
					`${base}/timeline/${data.topic}/${data.nextYear || data.mainContent?.year}`
				)}
			>
				<ArrowRight class="mr-3" />
				<span class="font-semibold">{m.funny_long_cheetah_forgive()}</span>
			</a>
		</div>
	</div>
</div>
