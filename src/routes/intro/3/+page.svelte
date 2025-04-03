<script lang="ts">
	import type { PageData } from './$types';
	import colors from '$lib/colors.json';

	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto max-w-2xl">
	<p class="text-2xl pt-5">
		Entscheide dich für einen der beiden Bieler Söldner und erfahre mehr über die Folgen seiner
		Entscheide.
	</p>
	<a class={["text-xl ml-50 my-5 btn btn-lg", colors['preset-filled']['Heilmann']]} href="../timeline/Heilmann/1785">Ich folge Georg Friedrich Heilmann</a>
	<a class={["text-xl ml-10 my-5 btn btn-lg", colors['preset-filled']['Neuhaus']]} href="../timeline/Neuhaus/1794">Ich folge François Emile Neuhaus</a>
	<p class="text-2xl pt-5">
		Doch was wäre, wenn man in Biel geblieben wäre? Was kann uns der Vennerbrunnen in
		der Altstadt erzählen? 
	</p>
	<div class="pt-10">
		<a class={["text-xl ml-40 my-5 btn btn-lg", colors['preset-filled']['Brunnen']]} href="../timeline/Brunnen/1798">Ich bleibe in Biel</a>
	</div>
	<p class="text-2xl pt-5">
		Du kannst jederzeit zwischen Zeit, Mensch und Ort wechseln. Denn es gibt
		nicht den vorgegebenen Lebenslauf, sondern Lebensrealitäten, die sich je nach Ort und
		getroffenem Entscheid voneinander unterscheiden.
	</p>
</div>
