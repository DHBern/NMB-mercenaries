<script lang="ts">
	import type { PageData } from './$types';
	import { colors } from '$lib/metadata.json';
	import portrait_heilmann from '$lib/images/portrait-heilmann-mono.jpg';
	import portrait_neuhaus from '$lib/images/portrait-neuhaus-mono.jpg';
	import portrait_brunnen from '$lib/images/portrait-brunnen-mono.jpg';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { onMount } from 'svelte';
</script>

<div class="mx-auto w-full pt-30">
	<p class="text-3xl font-bold">Wie hättest du entschieden?</p>
	<div>
		<p class="mb-30 w-250 pt-5 text-2xl">
			Folge einem der beiden Bieler Söldner und erfahre mehr über die Folgen seiner Entscheide. Oder
			bleib in Biel und lass den Vennerbrunnen in der Altstadt erzählen.
		</p>
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
					<span>Ich folge Georg Friedrich Heilmann</span>
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
					<ArrowRight class="mr-3" /><span>Ich folge François Emile Neuhaus</span></a
				>
			</div>
			<div class="flex flex-col items-center gap-3">
				<a href="../timeline/Biel/1798">
					<img class="max-h-50 max-w-50 opacity-70" src={portrait_brunnen} alt="brunnen" />
				</a>
				<a
					class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Biel']]}
					href="../timeline/Biel/1798"><ArrowRight class="mr-3" /><span>Ich bleibe in Biel</span></a
				>
			</div>
		</div>
	</div>
	<p class="mb-30 w-300 pt-5 pl-50 text-lg">
		Du kannst jederzeit zwischen Zeit, Mensch und Ort wechseln. Denn es gibt nicht den vorgegebenen
		Lebenslauf, sondern Lebensrealitäten, die sich je nach Ort und getroffenem Entscheid voneinander
		unterscheiden.
	</p>
</div>
