<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const images: any = import.meta.glob(['$lib/images/**/*.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	const altText = 'Kein Bild';
	const imgPath = `/src/lib/images/timeline/${data.detailContent?.Bild}.jpg`;
</script>

<!-- Content Box -->
<div class="absolute bottom-0 grid h-[90%] grid-cols-[5fr_3fr] gap-10 p-10 px-20 pr-50 pb-30">
	<!-- Image -->
	<!-- //! overflow-y-hidden is a hack to restrict the image to the height of the container. Somehow it is not working otherwise... -->
	<div class="grid h-full grid-rows-[auto_80px] overflow-hidden">
		{#if data.detailContent?.Bild}
			<img
				class="h-full w-full max-w-full object-contain object-right"
				src={images[imgPath]}
				alt={altText}
			/>
			<p class="ml-10 block text-right text-sm">{@html data.detailContent?.Eckdaten}</p>
		{/if}
	</div>

	<!-- Content -->
	<div class="flex max-h-full flex-col justify-end overflow-y-auto pb-15">
		<button
			class="btn btn-lg preset-outlined-primary-500 mb-10 h-12 w-40 font-semibold"
			onclick={() => {
				history.back();
			}}>Zurück</button
		>
		<h1 class="h1 mb-4">{@html data.detailContent?.Titel}</h1>
		{#if data.detailContent?.Text}
			<p>{@html data.detailContent?.Text}</p>
		{/if}
	</div>
</div>
