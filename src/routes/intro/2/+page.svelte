<script lang="ts">
	import { colors } from '$lib/metadata.json';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="mx-auto w-[80%] pt-30">
	<p class="mb-30 w-200 pl-0 text-2xl">
		{@html m.ago_orange_badger_coax()}
	</p>
	<p class="mb-30 w-200 pl-0 text-2xl">
		{@html m.lower_short_peacock_sway()}
	</p>
</div>

<style>
	:global(.heilmann) {
		color: var(--color-warning-500);
		font-weight: bold;
	}
	:global(.neuhaus) {
		color: var(--color-success-500);
		font-weight: bold;
	}
</style>
