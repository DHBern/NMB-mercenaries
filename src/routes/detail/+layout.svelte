<script lang="ts">
	import type { Snippet } from 'svelte';
	let { children }: { children: Snippet } = $props();
</script>

<div class="bg-surface-900 text-surface-50 h-full w-full">
	{@render children()}
</div>
