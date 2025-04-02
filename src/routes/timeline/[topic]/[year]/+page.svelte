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
	// let image = $derived(import(`$lib/images/timeline/${data.content?.Bild}.jpg`));
</script>

timeline page Title Content Karte Component Gleichzeitig anderswo component Bild
<img class="w-1/4" alt="Ortsbild" />
<h1 class="h1">{data.content?.Titel}</h1>

<!-- Year, Place, Map -->
<h2 class="h2">{data.content?.Jahr}</h2>
<h3 class="h3">{data.content?.Ort}</h3>
<Map region={data.content?.MapRegion} place={data.content?.MapPlace} />

<!-- Navigation along timeline -->
<a href="/timeline/{data.topic}/{data.prevYear}">Prev</a>
<a href="/timeline/{data.topic}/{data.nextYear}">Next</a>

<!-- Content -->
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

<!-- Image -->
<img src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']} alt="Detailbild" />
