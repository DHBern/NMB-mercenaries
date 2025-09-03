<script lang="ts">
	let { rValues, classes = '' } = $props();

	const rows = 84;
	const cols = 150;
	const cell = 10;
	const radiusScale = 1;

	let canvas: HTMLCanvasElement;
	let data = $derived(rValues);

	function draw() {
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		ctx.scale(canvas.width / 1500, canvas.height / 840);

		if (!data) return;

		ctx.fillStyle = 'black';

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

<div class={['map', classes]} style="position: absolute;">
	<canvas bind:this={canvas} width="1500" height="840" class="max-w-full"></canvas>
</div>

<style>
</style>
