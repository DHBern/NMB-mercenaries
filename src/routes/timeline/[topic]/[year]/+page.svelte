<script lang="ts">
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
<img src={images['$lib/images/timeline/' + data.content?.Bild + '.jpg']} alt="Detailbild" />
