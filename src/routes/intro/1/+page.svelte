<script>
	import { base } from '$app/paths';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { ArrowRight } from '@lucide/svelte';
</script>

<div class="fixed m-0 grid h-screen w-screen grid-rows-2 p-0">
	<a
		href={`${base}/de/intro/2`}
		class="m-0 flex h-full w-full items-center justify-center gap-6 bg-gray-600 p-0 text-center text-gray-200"
		><h1 class="h1 text-8xl">Verflochtene Leben</h1>
		<div class="btn-icon col-start-3 m-15 h-20 w-20 rounded-full bg-gray-300 text-gray-800">
			<ArrowRight class="h-10 w-10" />
		</div>
	</a>
	<a
		href={`${base}/fr/intro/2`}
		class="m-0 flex h-full w-full items-center justify-center gap-6 bg-gray-700 p-0 text-center text-gray-200"
		><h1 class="h1 text-8xl">Destins croisés</h1>
		<div class="btn-icon col-start-3 m-15 h-20 w-20 rounded-full bg-gray-300 text-gray-800">
			<ArrowRight class="h-10 w-10" />
		</div>
	</a>
</div>
