<script lang="ts">
	import type { PageData } from './$types';
	import colors from '$lib/colors.json';
	import heilmann from '$lib/images/timeline/Heilmann_intro.jpg';
	import neuhaus from '$lib/images/timeline/Neuhaus_intro.jpg';
	import brunnen from '$lib/images/timeline/Biel_intro provisorisch.jpg';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';


	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto pt-30 w-full">
	<p class="text-3xl font-bold">Wie hättest du entschieden?</p>
	<div>
		<p class="text-2xl mb-30 pt-5 w-250">
			Folge einem der beiden Bieler Söldner und erfahre mehr über die Folgen seiner Entscheide. Oder
			bleib in Biel und lass den Vennerbrunnen in der Altstadt erzählen.
		</p>
		<div class="flex-cols-3 my-5 mb-15 flex justify-around gap-10">
			<div class="flex flex-col items-center gap-3">
				<img class="max-h-50 max-w-50" src={heilmann} alt="heilmann" />
				<a
					class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Heilmann']]}
					href="../timeline/Heilmann/1785"
				>
					<ArrowRight class="mr-3" />
					<span>Ich folge Georg Friedrich Heilmann</span>
					</a
				>
			</div>
			<div class="flex flex-col items-center gap-3">
				<img class="max-h-50 max-w-50" src={neuhaus} alt="neuhaus" />
				<a
					class={['btn btn-lg text-xl', colors['preset-filled']['Neuhaus']]}
					href="../timeline/Neuhaus/1794">
					<ArrowRight class="mr-3" /><span>Ich folge François Emile Neuhaus</span></a
				>
			</div>
			<div class="flex flex-col items-center gap-3">
				<img class="max-h-50 max-w-50" src={brunnen} alt="brunnen" />
				<a
					class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Brunnen']]}
					href="../timeline/Brunnen/1798"><ArrowRight class="mr-3" /><span>Ich bleibe in Biel</span></a
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
