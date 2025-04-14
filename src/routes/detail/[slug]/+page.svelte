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

	function handleGoBack() {
		history.back();
	}
</script>

<!-- Content Box -->
<div class="absolute bottom-0 grid h-[90%] grid-cols-[5fr_3fr] gap-10 p-10 px-20 pr-50 pb-30">
	<!-- Image -->
	 <!-- //! overflow-y-hidden is a hack to restrict the image to the height of the container. Somehow it is not working otherwise... -->
	<div class="flex h-full flex-col justify-end overflow-y-hidden">
		{#if data.content?.Bild}
			<img
				class="max-h-full w-full max-w-full object-contain object-right"
				src={images[imgPath]}
				alt={altText}
			/>
			<p class="ml-10 h-10 text-right text-sm">{@html data.content?.Eckdaten}</p>
		{/if}
	</div>

	<!-- Content -->
	<div class="flex max-h-full flex-col justify-end overflow-y-auto pb-15">
		<button
			class="btn btn-lg preset-outlined-primary-500 mb-10 h-12 w-40 font-semibold"
			onclick={handleGoBack}>Zurück</button
		>
		<h1 class="h1 mb-4">{@html data.content?.Titel}</h1>
		{#if data.content?.Text}
			<p>{@html data.content?.Text}</p>
		{/if}
	</div>
</div>
