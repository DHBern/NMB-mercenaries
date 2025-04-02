<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { PageData } from './$types';
	import Map from './Map.svelte';

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
			<span>{data.content?.Ort}</span>
			<span>{data.content?.Jahr}</span>
		</div>
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

		<!-- Navigation along timeline -->
		<a href="/timeline/{data.topic}/{data.prevYear}">Prev</a>
		<a href="/timeline/{data.topic}/{data.nextYear}">Next</a>
	</div>

	<!-- Image -->
	<img src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']} alt="Detailbild" />
</div>
