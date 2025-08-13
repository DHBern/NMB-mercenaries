<script lang="ts">
	import type { Snippet } from 'svelte';
	import { m } from '$lib/paraglide/messages';
	let { children }: { children: Snippet } = $props();

	function handleGoBack() {
		history.back();
	}
</script>

<div class="dark h-full w-full overflow-hidden">
	{@render children()}

	<button
		class="btn preset-outlined-primary-500 absolute bottom-6 left-20 h-15 w-100 overflow-hidden text-2xl font-semibold"
		onclick={handleGoBack}>{m.watery_shy_porpoise_feel()}</button
	>
</div>
