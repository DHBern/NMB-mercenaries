<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const images: any = import.meta.glob(['$lib/images/**/*.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	console.log(images);
</script>

{#if data.type === 'anderswo'}
	<img
		src={images[`/src/lib/images/anderswo/${data.year}/${data.content?.Bild}.jpg`]}
		alt="anderswo"
	/>
{:else}
	<img src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']} />
{/if}
<h1>{data.topic} {data.year}</h1>
<p>{@html data.content?.Text}</p>

<button class="btn btn-lg preset-filled" onclick={() => history.back()}>Zurück</button>
