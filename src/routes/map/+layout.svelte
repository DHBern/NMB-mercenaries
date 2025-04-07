<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
	
	function handleGoBack() {
		history.back();
	}
</script>

<div class="bg-surface-900 text-surface-50 h-full w-full">
	{@render children()}

	<button
	class="absolute bottom-10 right-20 btn btn-lg preset-filled-primary-50 h-12 text-lg font-semibold"
	onclick={handleGoBack}>Zurück</button
	>

</div>
