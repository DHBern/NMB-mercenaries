<script lang="ts">
	import { base } from '$app/paths';
	import Circles_full from '$lib/circle-components/Circles-full-a-150.svelte';
	import Ping from '$lib/components/Ping.svelte';
	import { onNavigate } from '$app/navigation';
	import { navigateWithoutHistory } from './navigateWithoutHistory';
	import { localizeHref } from '$lib/paraglide/runtime';
	import { m } from '$lib/paraglide/messages';

	let isPulsating = $state(false);
	let timerPing = setTimeout(() => {
		isPulsating = true;
	}, 2000);

	onNavigate(() => {
		isPulsating = false;
		clearTimeout(timerPing);
		timerPing = setTimeout(() => {
			isPulsating = true;
		}, 2000);
	});
</script>

<div class="absolute top-0 left-0 !z-10 h-screen w-screen items-center justify-center">
	<svg class="map max-h-[calc(100vh)] w-screen p-[40px]" viewBox="0 0 1500 840">
		<!-- Rectangle for fill color -->
		<rect
			x="70"
			y="250"
			width="210"
			height="170"
			fill="var(--color-secondary-950)"
			class="cursor-pointer"
		/>
		<rect
			x="550"
			y="510"
			width="130"
			height="110"
			fill="var(--color-secondary-950)"
			class="cursor-pointer"
		/>

		<!-- Circles -->
		<Circles_full />

		<!-- Rectangle for frame and link (must be over circles with transparent color) -->
		<a
			href={localizeHref(`${base}/map/europe`)}
			onclick={(ev) => {
				navigateWithoutHistory(ev, localizeHref(`${base}/map/europe`));
			}}
		>
			<rect
				x="70"
				y="250"
				width="210"
				height="170"
				fill="#ffffff00"
				stroke="white"
				stroke-width="4"
				class="cursor-pointer"
			/>
		</a>
		<a
			href={localizeHref(`${base}/map/seasia`)}
			onclick={(ev) => {
				navigateWithoutHistory(ev, localizeHref(`${base}/map/seasia`));
			}}
		>
			<rect
				x="550"
				y="510"
				width="130"
				height="110"
				fill="#ffffff00"
				stroke="white"
				stroke-width="4"
				class="cursor-pointer"
			/>
		</a>

		<a
			href={localizeHref(`${base}/map/europe`)}
			onclick={(ev) => {
				navigateWithoutHistory(ev, localizeHref(`${base}/map/europe`));
			}}
			class="btn btn-lg"
		>
			<foreignObject x="60" y="240" width="90" height="35">
				<span class="text-surface-900 rounded bg-white px-2 text-base font-semibold"
					>{m.mad_icy_panther_hug()}</span
				>
			</foreignObject>
			<foreignObject x="0" y="180" width="120" height="120">
				<Ping classes="absolute top-1/2 left-1/2 size-4" setWhite={true} {isPulsating} />
			</foreignObject>
		</a>

		<a
			href={localizeHref(`${base}/map/seasia`)}
			onclick={(ev) => {
				navigateWithoutHistory(ev, localizeHref(`${base}/map/seasia`));
			}}
			class="btn btn-lg"
		>
			<foreignObject x="540" y="500" width="140" height="50">
				<span class="text-surface-900 rounded bg-white px-2 text-base font-semibold"
					>{m.many_such_haddock_dream()}</span
				>
			</foreignObject>
			<foreignObject x="480" y="440" width="120" height="120">
				<Ping classes="absolute top-1/2 left-1/2 size-4" setWhite={true} {isPulsating} />
			</foreignObject>
		</a>
	</svg>
</div>

<style>
	:global(img.hidden) {
		display: none;
	}
	.map :global(circle) {
		fill: var(--color-primary-500);
	}
</style>
