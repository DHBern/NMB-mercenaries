<script lang="ts">
	import '../app.css';
	import { locales, setLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { base } from '$app/paths';

	function handleGoBack() {
		history.back();
	}

	let isDark = $derived(
		page.url.pathname.includes('/map') || page.url.pathname.includes('/detail') ? true : false
	);
	let isMap = $derived(page.url.pathname.includes('/map') ? true : false);
	let isDetail = $derived(page.url.pathname.includes('/detail') ? true : false);

	let { children } = $props();
</script>

<div
	class={[
		'bg-surface-50 grid h-screen max-h-screen grid-rows-[1fr_11fr]',
		isDark && 'bg-surface-900 text-surface-50'
	]}
>
	<header class="flex justify-between gap-4 p-4">
		<a class="btn btn-lg preset-outlined-primary-500 h-12 font-semibold" href="{base}/intro/1"
			>Zum Start</a
		>
		{#if isMap || isDetail}
			<button
				class="btn btn-lg preset-outlined-primary-500 h-12 font-semibold"
				onclick={handleGoBack}>Zurück</button
			>
		{/if}
		<div class="flex gap-4">
			{#each locales as locale}
				<button
					class="btn btn-lg preset-outlined-primary-500 h-12 font-semibold"
					onclick={() => setLocale(locale)}
				>
					{locale}
				</button>
			{/each}
		</div>
	</header>

	<div class="h-full max-h-full">
		{@render children()}
	</div>
</div>
