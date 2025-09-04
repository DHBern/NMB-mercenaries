<script lang="ts">
	import { base } from '$app/paths';
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
	<svg
		class="map max-h-[calc(100vh)] w-screen bg-[url(/src/lib/mapimages/Map_full.png)]"
		viewBox="0 0 1500 840"
	>
		<!-- Rectangle for fill color -->
		<rect
			x="50"
			y="255"
			width="250"
			height="140"
			fill="var(--color-secondary-950)"
			fill-opacity="0.4"
			class="cursor-pointer"
		/>
		<rect
			x="440"
			y="460"
			width="250"
			height="140"
			fill="var(--color-secondary-950)"
			fill-opacity="0.4"
			class="cursor-pointer"
		/>

		<!-- Circles -->
		<!-- <Circles_full /> -->

		<!-- Rectangle for frame and link (must be over circles with transparent color) -->
		<a
			href={localizeHref(`${base}/map/europe`)}
			onclick={(ev) => {
				navigateWithoutHistory(ev, localizeHref(`${base}/map/europe`));
			}}
		>
			<rect
				x="50"
				y="255"
				width="250"
				height="140"
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
				x="440"
				y="460"
				width="250"
				height="140"
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
			<foreignObject x="40" y="240" width="240" height="35">
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
			<foreignObject x="430" y="450" width="240" height="50">
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
