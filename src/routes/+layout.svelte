<script lang="ts">
	import '../app.css';
	import { locales, setLocale } from '$lib/paraglide/runtime';

	let { children } = $props();
</script>

<div class="grid-rows-[1fr_11fr] grid h-screen max-h-screen">
	<header class="row-span-1 row-start-1 flex justify-between gap-4 p-4">
		<a class="btn btn-lg preset-filled-primary-500 h-16" href="/intro/1">Zum Start</a>
		<div class="flex gap-4">
			{#each locales as locale}
				<button class="btn btn-lg preset-filled-primary-500 h-16" onclick={() => setLocale(locale)}>
					{locale}
				</button>
			{/each}
		</div>
	</header>
	<div class="row-span-1 row-start-2">
		{@render children()}
	</div>
</div>
