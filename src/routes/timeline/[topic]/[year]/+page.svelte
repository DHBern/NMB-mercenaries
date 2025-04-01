<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { PageData } from './$types';
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
<p>
	{@html data.content?.Text}
</p>
<h2 class="h2">{m.close_livid_lemur_pull()}</h2>
<ul>
	{#each data.anderswo as item}
		<li><a href="/detail/{data.year}/{encodeURIComponent(item)}">{item}</a></li>
	{/each}
</ul>
<img src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']} alt="Detailbild" />
