<script lang="ts">
	import type { PageData } from './$types';
	import { colors } from '$lib/metadata.json';
	import portrait_heilmann from '$lib/images/portrait-heilmann-mono.jpg';
	import portrait_neuhaus from '$lib/images/portrait-neuhaus-mono.jpg';
	import portrait_brunnen from '$lib/images/portrait-biel-mono.jpg';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="mx-auto w-[80%] pt-30">
	<p class="mb-30 text-4xl">{m.that_just_kangaroo_flop()}</p>

	<div class="flex-cols-3 my-5 mb-15 flex justify-around gap-10">
		<div class="flex flex-col items-center gap-10">
			<a href="../timeline/Heilmann/1785"
				><img class="max-h-120 max-w-120 opacity-70" src={portrait_heilmann} alt="heilmann" /></a
			>
			<a
				class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Heilmann']]}
				href="../timeline/Heilmann/1785"
			>
				<ArrowRight class="mr-3" />
				<span>Georg Friedrich Heilmann</span>
			</a>
		</div>
		<div class="flex flex-col items-center gap-10">
			<a href="../timeline/Neuhaus/1794"
				><img class="max-h-120 max-w-120 opacity-70" src={portrait_neuhaus} alt="neuhaus" /></a
			>
			<a
				class={['btn btn-lg text-xl', colors['preset-filled']['Neuhaus']]}
				href="../timeline/Neuhaus/1794"
			>
				<ArrowRight class="mr-3" /><span>François Emile Neuhaus</span></a
			>
		</div>
		<div class="flex flex-col items-center gap-10">
			<a href="../timeline/Biel/1798">
				<img class="max-h-120 max-w-120 opacity-70" src={portrait_brunnen} alt="brunnen" />
			</a>
			<a
				class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Biel']]}
				href="../timeline/Biel/1798"
				><ArrowRight class="mr-3" /><span>{m.jolly_proud_nils_pop()}</span></a
			>
		</div>
	</div>
</div>
