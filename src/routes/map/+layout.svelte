<script lang="ts">
	import type { Snippet } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	let { children }: { children: Snippet } = $props();

	function handleGoBack() {
		history.back();
	}
</script>

<div class="dark h-full w-full overflow-hidden">
	{@render children()}

	<button
		class="btn bg-surface-50 border-surface-950 text-surface-950 absolute bottom-5 left-5 z-20 h-20 w-120 overflow-hidden border-2 text-3xl font-semibold"
		onclick={handleGoBack}
		><ArrowLeft size={35} classes="mr-40" />{m.watery_shy_porpoise_feel()}</button
	>
</div>
