<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import Map from './Map.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import Dot from './Dot.svelte';
	import { colors } from '$lib/metadata.json';

	const images: any = import.meta.glob(['$lib/images/timeline/**.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	let { data }: { data: PageData } = $props();
</script>

<div class="grid h-full max-h-full grid-cols-[1fr_3fr] gap-15">
	<!-- Orientation Box -->
	<div>
		<a href="{base}/map/{data.content?.MapRegion}?place={data.content?.MapPlace}">
			<Map region={data.content?.MapRegion} place={data.content?.MapPlace} topic={data.topic} />
		</a>
		<div class="my-2">
			<span class="text-5xl font-bold">{data.content?.Jahr}</span>
			<span class="text-4xl font-bold">in {data.content?.Ort}</span>
			{#if data.topic_label}<span class={['text-3xl font-bold', colors['text'][data.topic]]}
					>({@html data.topic_label})</span
				>{/if}
		</div>

		<!-- Gleichzeitig anderswo -->
		<div class="border-surface-200 ml-5 h-60 border-l-2 pt-4 pl-5">
			<h2 class="text-lg font-bold">{m.close_livid_lemur_pull()}</h2>
			{#each data.anderswo as item}
				<a
					class="anchor flex h-12 items-center gap-2 p-0 text-lg"
					href="{base}/detail/{encodeURIComponent(item)}_{data.year}"
				>
					<span class="relative flex size-3">
						<span
							class="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"
						></span>
						<span class="relative inline-flex size-3 rounded-full bg-black"></span>
					</span>
					<!-- <Dot size={24} color="black" /> -->
					<span>{item}</span>
				</a>
			{/each}
		</div>
	</div>

	<!-- Content Box -->
	<div class="grid h-full grid-cols-[2fr_1fr] grid-rows-[auto-90px] gap-4">
		<div class="max-h-full overflow-y-auto">
			<!-- Content -->
			<h1 class="h1 mb-4">{data.content?.Titel}</h1>
			<p>
				{@html data.content?.Text}
			</p>
		</div>

		<!-- Image -->
		<div class="col-start-2">
			{#if data.content?.Bild}
				<a href="{base}/detail/{data.content?.Bild}">
					<img
						class="h-full max-h-180 w-full object-contain object-right"
						src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']}
						alt="Detailbild"
					/>
				</a>
			{/if}
		</div>

		<!-- Navigation along timeline -->
		<div class="col-span-2 row-start-2 flex items-center justify-end gap-4">
			{#if data.prevYear}
				<a
					class={['btn-icon', colors['preset-filled'][data.topic], 'm-4', 'btn-icon-lg', 'w-50']}
					href="{base}/timeline/{data.topic}/{data.prevYear}"
				>
					<ArrowLeft class="mr-3" />
					<span class="font-semibold">Vorherige Station</span>
				</a>
			{/if}
			{#if data.nextYear}
				<a
					class={['btn-icon', colors['preset-filled'][data.topic], 'm-4', 'btn-icon-lg', 'w-50']}
					href="{base}/timeline/{data.topic}/{data.nextYear}"
				>
					<ArrowRight class="mr-3" />
					<span class="font-semibold">Nächste Station</span>
				</a>
			{/if}
		</div>
	</div>
</div>
