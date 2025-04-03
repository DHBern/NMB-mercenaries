<script lang="ts">
	import '../app.css';
	import { locales, setLocale } from '$lib/paraglide/runtime';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	
	function handleGoBack() {
		goto(document.referrer);
	}

	let isDark = $derived(page.url.pathname.includes('/map') || page.url.pathname.includes('/detail') ? true : false)
	let isMap = $derived(page.url.pathname.includes('/map') ? true : false)
	let isDetail = $derived(page.url.pathname.includes('/detail') ? true : false)

	let { children } = $props();
</script>

<div class="grid-rows-[1fr_11fr] grid h-screen max-h-screen">
	<header class={["flex justify-between gap-4 p-4", (isDark) &&'bg-surface-400']}>
		<a class="btn btn-lg preset-filled-primary-500 h-16" href="/intro/1">Zum Start</a>
		{#if isMap || isDetail}
			<button class="btn btn-lg preset-filled-primary-500 h-16" onclick={handleGoBack}>Zurück</button>
		{/if}
		<div class="flex gap-4">
			{#each locales as locale}
				<button class="btn btn-lg preset-filled-primary-500 h-16" onclick={() => setLocale(locale)}>
					{locale}
				</button>
			{/each}
		</div>
	</header>

	<div class="h-full max-h-full">
		{@render children()}
	</div>
</div>
