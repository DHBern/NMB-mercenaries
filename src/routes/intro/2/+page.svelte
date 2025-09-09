<script lang="ts">
	import { m } from '$lib/paraglide/messages';
</script>

<div class="mx-auto w-[80%] pt-30">
	<p class="mb-30 text-4xl">
		{@html m.ago_orange_badger_coax()}
	</p>
	<p class="mb-30 text-4xl">
		{@html m.lower_short_peacock_sway()}
	</p>
</div>

<style>
	:global(.heilmann, .neuhaus, .biel) {
		display: inline-block;
		color: white;
		padding: 0.35em 0.7em;
		border-radius: 0.6rem;
		line-height: 1;
		font-size: 0.9em;
	}
	:global(.biel) {
		background-color: var(--color-error-400);
		color: var(--color-error-950);
	}
	:global(.heilmann) {
		background-color: var(--color-warning-400);
		color: var(--color-warning-50);
	}
	:global(.neuhaus) {
		background-color: var(--color-success-500);
		color: var(--color-success-950);
	}
</style>
