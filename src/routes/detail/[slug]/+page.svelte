<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';

	let { data }: { data: PageData } = $props();

	const images: any = import.meta.glob(['$lib/images/**/*.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	const altText = data.type === 'anderswo' ? 'anderswo' : 'Kein Bild';
	const imgPath =
		data.type === 'anderswo'
			? `/src/lib/images/anderswo/${data.year}/${data.content?.Bild}.jpg`
			: `/src/lib/images/timeline/${data.content?.Bild}.jpg`;
</script>

<!-- Content Box -->
<div class="bottom-0 pb-20 px-20 absolute h-[90%] grid grid-cols-[5fr_3fr] gap-10 p-10 pr-50">
	<!-- Image -->
	<div class="h-full flex flex-col justify-end overflow-y-auto">
		{#if data.content?.Bild}
			<img
				class="max-h-full w-full max-w-full object-contain object-right"
				src={images[imgPath]}
				alt={altText}
			/>
		{/if}
	</div>

	<!-- Content -->
	<div class="max-h-full flex flex-col justify-end overflow-y-auto">
		<h1 class="h1 mb-4">{@html data.content?.Titel}</h1>
		{#if data.content?.Text}
			<p>{@html data.content?.Text}</p>
		{/if}
	</div>
</div>
