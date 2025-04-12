<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
	
	function handleGoBack() {
		history.back();
	}
</script>

<div class="dark h-full w-full">
	{@render children()}

	<button
	class="absolute bottom-6 left-20 btn w-50 h-15 text-2xl preset-outlined-primary-500 h-12 font-semibold"
	onclick={handleGoBack}>Zurück</button
	>

</div>
