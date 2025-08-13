<script lang="ts">
	let { rValues, region, topic, classes = '' } = $props();

	const rows = 83;
	const cols = 100;
	const cell = 10;
	const radiusScale = 1;

	// Map "topic" → CSS variable reference
	const topicColors = {
		Neuhaus: 'var(--color-success-400)',
		Heilmann: 'var(--color-warning-400)',
		Biel: 'var(--color-error-400)'
	};

	let canvas: HTMLCanvasElement;
	let data = $derived(rValues?.[region]);

	function draw() {
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.scale(canvas.width / 1000, canvas.height / 840);

		if (!data) return;

		// Get the computed color from CSS variables so it matches your theme
		const computedColor = getComputedStyle(canvas)
			.getPropertyValue(
				topicColors[topic]
					? topicColors[topic].replace(/^var\((.*)\)$/, '$1')
					: '--color-success-400'
			)
			.trim();

		ctx.fillStyle = computedColor;

		for (let i = 0; i < rows; i++) {
			const cy = i * cell + 5;
			for (let j = 0; j < cols; j++) {
				const idx = i * cols + j;
				const r = (data[idx] ?? 0) * radiusScale;
				if (r <= 0) continue;

				const cx = j * cell + 5;
				ctx.beginPath();
				ctx.arc(cx, cy, r, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		ctx.restore();
	}

	$effect(() => {
		draw();
	});
</script>

<div class={['map', classes]} data-topic={topic} style="position: relative;">
	<canvas bind:this={canvas} width="1000" height="840" class="max-w-full"></canvas>
</div>

<style>
</style>
