<script lang="ts">
	import { base } from '$app/paths';
	import Circles_full from '$lib/circle-components/Circles-full.svelte';
	import Ping from '$lib/components/Ping.svelte';
	
	let isPulsating = $state(false);
	setTimeout(() => {
		isPulsating = true;
	}, 2000);

</script>

<div class="flex h-screen items-center justify-center">
	<svg class="map max-h-[calc(100vh/12*10)]" viewBox="0 0 1000 840">
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
		<a href="{base}/map/europe">
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
		<a href="{base}/map/seasia">
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
			href="{base}/map/europe"
			class="btn btn-lg"
		>
			<foreignObject x="60" y="240" width="90" height="35">
				<span class="text-base rounded bg-white px-2 text-surface-900 font-semibold">Europa</span>
			</foreignObject>
			<foreignObject x="0" y="180" width="120" height="120">
				<Ping classes="absolute top-1/2 left-1/2 size-4" setWhite={true} {isPulsating}/>
			</foreignObject>
		</a>

		<a
			href="{base}/map/seasia"
			class="btn btn-lg"
		>
			<foreignObject x="540" y="500" width="140" height="50">
				<span class="text-base rounded bg-white px-2 text-surface-900 font-semibold">Südostasien</span>
			</foreignObject>
			<foreignObject x="480" y="440" width="120" height="120">
				<Ping classes="absolute top-1/2 left-1/2 size-4" setWhite={true} {isPulsating}/>
			</foreignObject>
		</a>
	</svg>
</div>

<style>
	img.hidden {
		display: none;
	}
	.map :global(circle) {
		fill: var(--color-primary-500);
	}
</style>
