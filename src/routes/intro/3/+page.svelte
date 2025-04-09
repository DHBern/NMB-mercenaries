<script lang="ts">
	import type { PageData } from './$types';
	import { colors } from '$lib/metadata.json';
	import heilmann from '$lib/images/timeline/Heilmann_intro.jpg';
	import neuhaus from '$lib/images/timeline/Neuhaus_intro.jpg';
	import brunnen from '$lib/images/timeline/Biel_intro provisorisch.jpg';

	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto max-w-2xl">
	<p class="pt-5 text-2xl">
		Entscheide dich für einen der beiden Bieler Söldner und erfahre mehr über die Folgen seiner
		Entscheide.
	</p>
	<img class="max-h-50" src={heilmann} alt="heilmann" />
	<a
		class={['btn btn-lg my-5 ml-50 text-xl', colors['preset-filled']['Heilmann']]}
		href="../timeline/Heilmann/1785">Ich folge Georg Friedrich Heilmann</a
	>
	<img class="max-h-50" src={neuhaus} alt="neuhaus" />
	<a
		class={['btn btn-lg my-5 ml-10 text-xl', colors['preset-filled']['Neuhaus']]}
		href="../timeline/Neuhaus/1794">Ich folge François Emile Neuhaus</a
	>
	<p class="pt-5 text-2xl">
		Doch was wäre, wenn man in Biel geblieben wäre? Was kann uns der Vennerbrunnen in der Altstadt
		erzählen?
	</p>
	<div class="pt-10">
		<img class="max-h-50" src={brunnen} alt="brunnen" />
		<a
			class={['btn btn-lg my-5 ml-40 text-xl', colors['preset-filled']['Brunnen']]}
			href="../timeline/Brunnen/1798">Ich bleibe in Biel</a
		>
	</div>
	<p class="pt-5 text-2xl">
		Du kannst jederzeit zwischen Zeit, Mensch und Ort wechseln. Denn es gibt nicht den vorgegebenen
		Lebenslauf, sondern Lebensrealitäten, die sich je nach Ort und getroffenem Entscheid voneinander
		unterscheiden.
	</p>
</div>
