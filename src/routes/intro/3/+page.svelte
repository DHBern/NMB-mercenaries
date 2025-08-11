<script lang="ts">
	import type { PageData } from './$types';
	import { colors } from '$lib/metadata.json';
	import portrait_heilmann from '$lib/images/portrait-heilmann-mono.jpg';
	import portrait_neuhaus from '$lib/images/portrait-neuhaus-mono.jpg';
	import portrait_brunnen from '$lib/images/portrait-brunnen-mono.jpg';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { m } from '$lib/paraglide/messages';
</script>

<div class="mx-auto w-full pt-30">
	<div>
		<p class="mb-30 w-250 pt-5 text-2xl">{m.that_just_kangaroo_flop()}</p>
		<div class="flex-cols-3 my-5 mb-15 flex justify-around gap-10">
			<div class="flex flex-col items-center gap-3">
				<a href="../timeline/Heilmann/1785"
					><img class="max-h-50 max-w-50 opacity-70" src={portrait_heilmann} alt="heilmann" /></a
				>
				<a
					class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Heilmann']]}
					href="../timeline/Heilmann/1785"
				>
					<ArrowRight class="mr-3" />
					<span>Georg Friedrich Heilmann</span>
				</a>
			</div>
			<div class="flex flex-col items-center gap-3">
				<a href="../timeline/Neuhaus/1794"
					><img class="max-h-50 max-w-50 opacity-70" src={portrait_neuhaus} alt="neuhaus" /></a
				>
				<a
					class={['btn btn-lg text-xl', colors['preset-filled']['Neuhaus']]}
					href="../timeline/Neuhaus/1794"
				>
					<ArrowRight class="mr-3" /><span>François Emile Neuhaus</span></a
				>
			</div>
			<div class="flex flex-col items-center gap-3">
				<a href="../timeline/Brunnen/1798">
					<img class="max-h-50 max-w-50 opacity-70" src={portrait_brunnen} alt="brunnen" />
				</a>
				<a
					class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Biel']]}
					href="../timeline/Brunnen/1798"
					><ArrowRight class="mr-3" /><span>{m.jolly_proud_nils_pop()}</span></a
				>
			</div>
		</div>
	</div>
	<p class="text-lg mb-30 pt-5 pl-50 w-300">
		Du kannst jederzeit zwischen Zeit, Mensch und Ort wechseln. Denn es gibt nicht den vorgegebenen
		Lebenslauf, sondern Lebensrealitäten, die sich je nach Ort und getroffenem Entscheid voneinander
		unterscheiden.
	</p>
</div>
