<script lang="ts">
	import '../app.css';
	import { locales, setLocale } from '$lib/paraglide/runtime';
	import { page } from '$app/state';
	import { base } from '$app/paths';
	import { listen, onIdle } from 'svelte-idle';
	import { goto } from '$app/navigation';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import { Modal } from '@skeletonlabs/skeleton-svelte';
	import { m } from '$lib/paraglide/messages';

	let { children } = $props();

	listen({
		// timer: 5000, //uncomment to test the modal
		timer: 60_000 * 3, // 3 minutes
		cycle: 5000
	});

	let isDark = $derived(
		page.url.pathname.includes('/map') || page.url.pathname.includes('/detail') ? true : false
	);

	let isModalOpen = $state(false);
	let remaining = $state(10);
	let intervalID: number | undefined = undefined;
	let timerToHome: number | undefined = undefined;

	function modalClose() {
		isModalOpen = false;
	}
	$effect(() => {
		if (isModalOpen === false) {
			clearInterval(intervalID);
			clearTimeout(timerToHome);
		}
	});

	onIdle(() => {
		if (!page.url.pathname.includes('/intro/1')) {
			clearInterval(intervalID);
			clearTimeout(timerToHome);
			remaining = 10;
			isModalOpen = true;
			intervalID = setInterval(() => {
				remaining -= 1;
			}, 1000);
			timerToHome = setTimeout(() => {
				isModalOpen = false;
				clearInterval(remaining);
				goto(base + '/intro/1', { replaceState: true });
			}, 10000);
		}
	});
</script>

<Modal
	open={isModalOpen}
	onOpenChange={(e) => (isModalOpen = e.open)}
	triggerBase="btn preset-tonal"
	contentBase="card bg-surface-100-900 p-4 space-y-4 shadow-xl max-w-screen-sm"
	backdropClasses="backdrop-blur-sm"
>
	{#snippet content()}
		<header class="flex justify-between">
			<h2 class="h2">{m.full_clean_swan_burn()}</h2>
		</header>
		<article>
			<p class="opacity-60">
				{m.east_red_jay_strive({ count: remaining })}
			</p>
		</article>
		<footer class="flex justify-around gap-4">
			<button type="button" class="btn btn-lg preset-filled" onclick={modalClose}
				>{m.witty_round_toad_charm()}</button
			>
		</footer>
	{/snippet}
</Modal>

<div
	class={[
		'bg-surface-50 grid h-screen max-h-screen grid-rows-[1fr_11fr]',
		isDark && 'bg-surface-900 text-surface-50'
	]}
>
	<header class="flex justify-between gap-4 p-4">
		{#if !page.url.pathname.includes('/intro')}
			<div class="flex gap-4">
				<button
					class="btn btn-lg preset-outlined-primary-500 h-12 font-semibold"
					onclick={() => {
						history.back();
					}}><ArrowLeft /></button
				>
				<a class="btn btn-lg preset-outlined-primary-500 h-12 font-semibold" href="{base}/intro/1"
					>{m.mild_still_moth_roam()}</a
				>
			</div>
		{:else}
			<div class="flex gap-4"></div>
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
