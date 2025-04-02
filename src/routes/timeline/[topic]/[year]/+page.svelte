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

<div class="grid grid-cols-[1fr_1fr_1fr] gap-4">
	<div>
		<Map region={data.content?.MapRegion} place={data.content?.MapPlace} />
		<div>
			<span class="h1 mr-4 font-bold">{data.content?.Ort}</span>
			<span class="h2 font-bold">{data.content?.Jahr}</span>
		</div>
		<!-- Navigation along timeline -->
		{#if data.prevYear}
			<a
				class={['btn-icon', colors['preset-filled'][data.topic]]}
				href="/timeline/{data.topic}/{data.prevYear}"
			>
				<ArrowLeft />
			</a>
		{/if}
		{#if data.nextYear}
			<a
				class={['btn-icon', colors['preset-filled'][data.topic]]}
				href="/timeline/{data.topic}/{data.nextYear}"
			>
				<ArrowRight />
			</a>
		{/if}
	</div>

	<div>
		<!-- Content -->
		<h1 class="h1">{data.content?.Titel}</h1>
		<p>
			{@html data.content?.Text}
		</p>
		<!-- Gleichzeitig anderswo -->
		<h2 class="h2">{m.close_livid_lemur_pull()}</h2>
		<ul>
			{#each data.anderswo as item}
				<li><a href="/detail/{data.year}/{encodeURIComponent(item)}">{item}</a></li>
			{/each}
		</ul>
	</div>

	<!-- Image -->
	<img src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']} alt="Detailbild" />
</div>
