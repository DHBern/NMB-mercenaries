<script lang="ts">
	import { m } from '$lib/paraglide/messages.js';
	import type { PageData } from './$types';
	import Map_java from './Map_java.svelte';

	const images: any = import.meta.glob(['$lib/images/timeline/**.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	let { data }: { data: PageData } = $props();
</script>

<div class="grid grid-cols-[1fr_1fr_1fr] gap-4">
	<div>
		<Map_java />
		<div>
			<span>{data.content?.Ort}</span>
			<span>{data.content?.Jahr}</span>
		</div>

		<!-- Navigation along timeline -->
		<a href="/timeline/{data.topic}/{data.prevYear}">Prev</a>
		<a href="/timeline/{data.topic}/{data.nextYear}">Next</a>
	</div>

	<div>
		<h1 class="h1">{data.content?.Titel}</h1>
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
	</div>

	<!-- Image -->
	<img src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']} alt="Detailbild" />
</div>
