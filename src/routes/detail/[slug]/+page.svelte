<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';

	let { data }: { data: PageData } = $props();

	const images: any = import.meta.glob(['$lib/images/**/*.jpg'], {
		eager: true,
		query: '?url',
		import: 'default'
	});
</script>

<!-- Content Box -->
<div class="grid h-full grid-cols-[1fr_1fr] gap-10 p-10 pr-50">
	<!-- Image -->
	<div class="">
		{#if data.content?.Bild}
			<a href="{base}#">
				{#if data.type === 'anderswo'}
					<img
						class="h-full max-h-96 w-full object-contain object-right"
						src={images[`/src/lib/images/anderswo/${data.year}/${data.content?.Bild}.jpg`]}
						alt="anderswo"
					/>
				{:else}
					<img
						class="h-full max-h-96 w-full object-contain object-right"
						src={images['/src/lib/images/timeline/' + data.content?.Bild + '.jpg']}
						alt="Kein Bild"
					/>
				{/if}
			</a>
		{/if}
	</div>

	<!-- Content -->
	<div class="max-h-full overflow-y-auto">
		<h1 class="h1 mb-4">{@html data.content?.Titel}</h1>
		<p class="">
			{@html data.content?.Text}
		</p>
	</div>
</div>
