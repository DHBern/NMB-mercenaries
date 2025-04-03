<script lang="ts">
	import '../app.css';
	import { locales, setLocale } from '$lib/paraglide/runtime';

	import { page } from '$app/state';

	let isDark = $derived(page.url.pathname.includes('/map') || page.url.pathname.includes('/detail') ? true : false)
	console.log(isDark);

	let { children } = $props();
</script>
<p>{page.url.pathname}</p>
<div class="grid-rows-[1fr_11fr] grid h-screen max-h-screen">
	<header class={["flex justify-between gap-4 p-4", (isDark) &&'bg-surface-400']}>
		<a class="btn btn-lg preset-filled-primary-500 h-16" href="/intro/1">Zum Start</a>
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
