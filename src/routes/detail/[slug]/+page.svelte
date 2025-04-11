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
<div class="grid grid-cols-[1fr_1fr] gap-10 p-10 pr-50">
	<!-- Image -->
	<div class="max-h-full h-full flex justify-center items-center">
		{#if data.content?.Bild}
			<img
				class="h-full max-h-170 w-full max-w-full object-contain object-right"
				src={images[imgPath]}
				alt={altText}
			/>
		{/if}
	</div>

	<!-- Content -->
	<div class="max-h-full overflow-y-auto">
		<h1 class="h1 mb-4">{@html data.content?.Titel}</h1>
		<p>{@html data.content?.Text}</p>
	</div>
</div>
