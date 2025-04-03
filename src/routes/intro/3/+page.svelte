<script lang="ts">
	import type { PageData } from './$types';
	import colors from '$lib/colors.json';

	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto max-w-2xl">
	<p class="text-2xl">
		Entscheide dich für einen der beiden Bieler Söldner und erfahre, mehr über die Folgen seiner
		Entscheide. Doch was wäre, wenn man in Biel geblieben wäre? Was kann uns der Vennerbrunnen in
		der Altstadt erzählen? Du kannst jederzeit zwischen Zeit, Mensch und Ort wechseln. Denn es gibt
		nicht den vorgegebenen Lebenslauf, sondern Lebensrealitäten, die sich je nach Ort und
		getroffenem Entscheid voneinander unterscheiden.
	</p>
	<div class="pt-10">
		<a class={["text-xl ml-50 my-5 inline-block btn btn-lg", colors['preset-filled']['Heilmann']]} href="../timeline/Heilmann/1785">Biografie von Georg Friedrich Heilmann</a>
		<br />
		<a class={["text-xl ml-10 my-5 inline-block btn btn-lg", colors['preset-filled']['Neuhaus']]} href="../timeline/Neuhaus/1794">Biografie von François Emile Neuhaus</a>
		<br />
		<a class={["text-xl ml-40 my-5 inline-block btn btn-lg", colors['preset-filled']['Brunnen']]} href="../timeline/Brunnen/1798">Ich bleibe in Biel</a>
	</div>
</div>
