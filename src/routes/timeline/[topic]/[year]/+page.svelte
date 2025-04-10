<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import Map from './Map.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import { Dot } from '@lucide/svelte';
	import colors from '$lib/colors.json';

	const images: any = import.meta.glob(['$lib/images/timeline/**.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	let { data }: { data: PageData } = $props();
</script>

<div class="grid h-full max-h-full grid-cols-[1fr_3fr] gap-10">
	<!-- Orientation Box -->
	<div>
		<a href="{base}/map/{data.content?.MapRegion}?place={data.content?.MapPlace}">
			<Map region={data.content?.MapRegion} place={data.content?.MapPlace} topic={data.topic}/>
		</a>
		<div class="my-12">
			<span class={['h3 mr-4 font-bold', colors['text'][data.topic]]}>{data.topic_label}</span>
			<br />
			<span class="h1 mr-4 font-bold">{data.content?.Ort}</span>
			<span class="h2 font-bold">{data.content?.Jahr}</span>
		</div>
	</div>

	<!-- Content Box -->
	<div class="grid h-full grid-cols-[2fr_1fr] grid-rows-[auto-90px] gap-4">
		<div class="max-h-full overflow-y-auto">
			<!-- Content -->
			<h1 class="h1 mb-4">{data.content?.Titel}</h1>
			<p class="">
				{@html data.content?.Text}
			</p>

			<!-- Gleichzeitig anderswo -->
			<h2 class="h2 mt-6 mb-4">{m.close_livid_lemur_pull()}</h2>
			<ul class="list-inside list-disc space-y-2">
				{#each data.anderswo as item}
					<div class="m-0 block h-10 p-0">
						<Dot class="inline" size="120px" />
						<a class="anchor" href="{base}/detail/{encodeURIComponent(item)}_{data.year}"
							>{@html item}</a
						>
					</div>
				{/each}
			</ul>
		</div>

		<!-- Image -->
		<div class="col-start-2">
			{#if data.content?.Bild}
				<a href="{base}/detail/{data.content?.Bild}">
					<img
						class="h-full max-h-96 w-full object-contain object-right"
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
