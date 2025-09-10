<script lang="ts">
	import type { PageData } from './$types';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	let { data }: { data: PageData } = $props();

	const images: any = import.meta.glob(['$lib/images/**/*.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
	const altText = 'Kein Bild';
	const imgPath = `/src/lib/images/timeline/${data.detailContent?.image}.jpg`;

	// Get language dependent data
	let title_slug = $state('');
	let source_slug = $state('');
	let text_slug = $state('');
	$effect(() => {
		if (getLocale() == 'de') {
			title_slug = 'title_de';
			source_slug = 'source_de';
			text_slug = 'text_de';
		} else if (getLocale() == 'fr') {
			title_slug = 'title_fr';
			source_slug = 'source_fr';
			text_slug = 'text_fr';
		} else {
			title_slug = 'title_de';
			source_slug = 'source_de';
			text_slug = 'text_de';
		}
	});
</script>

<!-- Content Box -->
<div class="absolute bottom-0 m-10 mx-20 grid h-[90%] grid-cols-[5fr_3fr] gap-10">
	<!-- Image -->
	<div class="grid h-full max-h-full min-h-0 min-w-0">
		{#if data.detailContent?.image}
			<img
				class="max-h-full min-h-0 w-full max-w-full min-w-0 self-end object-contain object-right pr-20 pb-40"
				src={images[imgPath]}
				alt={altText}
			/>
		{/if}
	</div>

	<!-- Content -->
	<div class="flex max-h-full flex-col justify-end pb-17">
		<h1 class="h1 mb-4 text-6xl">{@html data.detailContent?.[title_slug]}</h1>
		<p class="text-3xl">{@html data.detailContent?.[text_slug]}</p>
		<p class="text-lg">{@html data.detailContent?.[source_slug]}</p>
		<button
			class="btn bg-surface-50 border-surface-950 text-surface-950 mt-5 h-15 w-100 self-end overflow-hidden border-2 text-2xl font-semibold"
			onclick={() => {
				history.back();
			}}>{m.watery_shy_porpoise_feel()}</button
		>
	</div>
</div>
