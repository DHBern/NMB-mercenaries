<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { PageData } from './$types';
	import Map from './Map.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import colors from '$lib/colors.json';

	const images: any = import.meta.glob(['$lib/images/timeline/**.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	let { data }: { data: PageData } = $props();
</script>

<div class="grid grid-cols-[1fr_2fr_1fr] gap-4">
	<div>
		<Map region={data.content?.MapRegion} place={data.content?.MapPlace} />
		<div class="my-12">
			<span class="h1 mr-4 font-bold">{data.content?.Ort}</span>
			<span class="h2 font-bold">{data.content?.Jahr}</span>
		</div>
		<!-- Navigation along timeline -->
		<div class="flex items-center justify-center gap-4">
			{#if data.prevYear}
				<a
					class={['btn-icon', colors['preset-filled'][data.topic], 'm-4', 'btn-icon-lg']}
					href="/timeline/{data.topic}/{data.prevYear}"
				>
					<ArrowLeft />
				</a>
			{/if}
			{#if data.nextYear}
				<a
					class={['btn-icon', colors['preset-filled'][data.topic], 'm-4', 'btn-icon-lg']}
					href="/timeline/{data.topic}/{data.nextYear}"
				>
					<ArrowRight />
				</a>
			{/if}
		</div>
	</div>

	<div>
		<!-- Content -->
		<h1 class="h1 mb-4">{data.content?.Titel}</h1>
		<p>
			{@html data.content?.Text}
		</p>
		<!-- Gleichzeitig anderswo -->
		<h2 class="h2 mt-6 mb-4">{m.close_livid_lemur_pull()}</h2>
		<ul class="list-inside list-disc space-y-2">
			{#each data.anderswo as item}
				<li><a class="anchor" href="/detail/{encodeURIComponent(item)}_{data.year}">{item}</a></li>
			{/each}
		</ul>
	</div>

	<!-- Image -->
	{#if data.content?.Bild}
		<a href="/detail/{data.content?.Bild}">
			<img
				class="h-full max-h-96 w-full object-contain object-right"
				src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']}
				alt="Detailbild"
			/>
		</a>
	{/if}
</div>
