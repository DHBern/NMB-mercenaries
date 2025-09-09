<script lang="ts">
	import type { PageData } from './$types';
	import { colors } from '$lib/metadata.json';
	import portrait_heilmann from '$lib/images/portrait-heilmann-mono.jpg';
	import portrait_neuhaus from '$lib/images/portrait-neuhaus-mono.jpg';
	import portrait_brunnen from '$lib/images/portrait-biel-mono-gray.jpg';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="mx-auto w-[80%] pt-30">
	<p class="mb-30 text-4xl">{m.that_just_kangaroo_flop()}</p>

	<div class="flex-cols-3 my-5 mb-15 flex justify-around gap-10 pt-10 pl-50">
		<div class="relative translate-y-[0px]">
			<a href="../timeline/Heilmann/1785"
				><img
					class="border-warning-500 max-w-100 rounded-lg border-4 bg-white p-[0px] opacity-70"
					src={portrait_heilmann}
					alt="heilmann"
				/></a
			>
			<a
				class={[
					'btn absolute -bottom-15 -left-20 h-10 max-h-15 min-h-20 w-135 -rotate-0 p-3 text-3xl',
					colors['preset-filled']['Heilmann']
				]}
				href="../timeline/Heilmann/1785"
			>
				<ArrowRight class="mr-3" size="40" />
				<span>Georg Friedrich Heilmann</span>
			</a>
		</div>
		<div class="relative translate-y-[140px]">
			<a href="../timeline/Biel/1798">
				<img
					class="border-error-500 max-w-100 translate-y-[140px] rounded-lg border-4 bg-white p-[0px] opacity-70"
					src={portrait_brunnen}
					alt="brunnen"
				/>
			</a>
			<a
				class={[
					'btn absolute -bottom-15 -left-20 max-h-15 min-h-20 w-135 -rotate-0 p-3 text-3xl',
					colors['preset-filled']['Biel']
				]}
				href="../timeline/Biel/1798"
				><ArrowRight class="mr-3" size="40" /><span>{m.jolly_proud_nils_pop()}</span></a
			>
		</div>
		<div class="relative translate-x-[20px] translate-y-[60px]">
			<a href="../timeline/Neuhaus/1794"
				><img
					class=" border-success-500 max-w-100 translate-y-[0x] rounded-lg border-4 bg-white p-[0px] opacity-70"
					src={portrait_neuhaus}
					alt="neuhaus"
				/></a
			>
			<a
				class={[
					'btn absolute -bottom-10 -left-20 max-h-15 min-h-20 w-135 rotate-0 p-3 text-3xl',
					colors['preset-filled']['Neuhaus']
				]}
				href="../timeline/Neuhaus/1794"
			>
				<ArrowRight class="mr-3" size="40" /><span>François Emile Neuhaus</span></a
			>
		</div>
	</div>
</div>
