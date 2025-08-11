<script lang="ts">
	import type { Snippet } from 'svelte';
	import { base } from '$app/paths';
	import type { LayoutData } from './$types';
	import { onNavigate } from '$app/navigation';
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';
	import { page } from '$app/state';
	import { localizeHref } from '$lib/paraglide/runtime';

	let { data, children }: { data: LayoutData; children: Snippet } = $props();

	const slide = $derived(Number(page.route.id?.split('/')[2]));
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{#if slide > 1}
	<div class="grid h-full grid-cols-[1fr_14fr_1fr] place-items-center gap-4">
		<a
			class="btn-icon preset-filled-primary-500 m-15 h-20 w-20 rounded-full"
			href={localizeHref(`${base}/intro/${slide - 1}`)}><ArrowLeft class="h-10 w-10" /></a
		>
		<div class="col-start-2 flex flex-col items-center justify-center gap-4">
			{@render children()}
		</div>
		{#if slide < 3}
			<a
				class="btn-icon preset-filled-primary-500 col-start-3 m-15 h-20 w-20 rounded-full"
				href={localizeHref(`${base}/intro/${slide + 1}`)}><ArrowRight class="h-10 w-10" /></a
			>
		{/if}
	</div>
{:else if slide == 1}
	<div class="h-screen w-screen">
		{@render children()}
	</div>
{/if}

<style lang="postcss">
	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}

	@keyframes fade-out {
		to {
			opacity: 0;
		}
	}

	@keyframes slide-from-right {
		from {
			transform: translateX(30px);
		}
	}

	@keyframes slide-to-left {
		to {
			transform: translateX(-30px);
		}
	}

	:root::view-transition-old(root) {
		animation:
			90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
	}

	:root::view-transition-new(root) {
		animation:
			210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
			300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
	}
</style>
