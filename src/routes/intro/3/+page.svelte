<script lang="ts">
	import type { PageData } from './$types';

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
	<a>Heilmann_intro</a>
	<a>Neuhaus_intro</a>
	<a>Biel_intro</a>
</div>
