<script lang="ts">
	import colors from '$lib/colors.json';
	import CirclesHeilmann from '$lib/circle-components/Circles-heilmann.svelte';
	import CirclesNeuhaus from '$lib/circle-components/Circles-neuhaus.svelte';
	import CirclesBrunnen from '$lib/circle-components/Circles-brunnen.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { onMount } from 'svelte';

</script>

<div class="mx-auto">
	<p class="text-3xl">Entscheide dich!</p>
	<div>
		<p class="pt-5 text-2xl">
			Folge einem der beiden Bieler Söldner und erfahre mehr über die Folgen seiner Entscheide. Oder
			bleib in Biel und lass den Vennerbrunnen in der Altstadt erzählen.
		</p>
		<div class="flex-cols-3 my-5 mb-15 flex justify-around gap-10">
			<div class="flex flex-col items-center gap-3">
				<svg class="max-h-50 max-w-50" viewBox="0 0 700 880" data-topic="heilmann">
					<CirclesHeilmann />
					<a href="../timeline/Heilmann/1785">
						<rect x="0" y="0" width="700" height="880" fill="#ffffff00"></rect>
					</a>
				</svg>
				<!-- <img class="max-h-50 max-w-50" src={heilmann} alt="bild" /> -->
				<a
					class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Heilmann']]}
					href="../timeline/Heilmann/1785"
				>
					<ArrowRight class="mr-3" />
					<span>Ich folge Georg Friedrich Heilmann</span>
				</a>
			</div>
			<div class="flex flex-col items-center gap-3">
				<!-- <img class="max-h-50 max-w-50" src={neuhaus} alt="bild" /> -->
				<svg class="max-h-50 max-w-50" viewBox="0 0 700 880" data-topic="neuhaus">
					<CirclesNeuhaus />
					<a href="../timeline/Neuhaus/1794">
						<rect x="0" y="0" width="700" height="880" fill="#ffffff00"></rect>
					</a>
				</svg>
				<a
					class={['btn btn-lg text-xl', colors['preset-filled']['Neuhaus']]}
					href="../timeline/Neuhaus/1794"
				>
					<ArrowRight class="mr-3" /><span>Ich folge François Emile Neuhaus</span></a
				>
			</div>
			<div class="flex flex-col items-center gap-3">
				<svg class="max-h-50 max-w-50" viewBox="0 0 700 880" data-topic="brunnen">
					<CirclesBrunnen />
					<a href="../timeline/Brunnen/1798">
						<rect x="0" y="0" width="700" height="880" fill="#ffffff00"></rect>
					</a>
				</svg>
				<!-- <img class="max-h-50 max-w-50" src={brunnen} alt="bild" /> -->
				<a
					class={['btn btn-lg max-h-15 text-xl', colors['preset-filled']['Brunnen']]}
					href="../timeline/Brunnen/1798"
					><ArrowRight class="mr-3" /><span>Ich bleibe in Biel</span></a
				>
			</div>
		</div>
	</div>
	<p class="pt-5 text-lg">
		Du kannst jederzeit zwischen Zeit, Mensch und Ort wechseln. Denn es gibt nicht den vorgegebenen
		Lebenslauf, sondern Lebensrealitäten, die sich je nach Ort und getroffenem Entscheid voneinander
		unterscheiden.
	</p>
</div>
