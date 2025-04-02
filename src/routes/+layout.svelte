<script lang="ts">
	import '../app.css';
	import { locales, setLocale } from '$lib/paraglide/runtime';

	let { children } = $props();
</script>

<div class="h-screen max-h-screen grid grid-[1fr-11fr]">
	<header class="flex justify-between gap-4 p-4 max-h-20">
		<a class="btn btn-lg preset-filled-primary-500" href="/intro/1">Zum Start</a>
		<div class="flex gap-4">
			{#each locales as locale}
				<button class="btn btn-lg preset-filled-primary-500" onclick={() => setLocale(locale)}>
					{locale}
				</button>
			{/each}
		</div>
	</header>
	<div class="">
		{@render children()}
	</div>
</div>
