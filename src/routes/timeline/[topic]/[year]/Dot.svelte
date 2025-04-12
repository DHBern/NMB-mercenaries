<script lang="ts">
	let { size = 24, color = 'black' } = $props();

</script>

<svg
	width={`${size}`}
	height={`${size}`}
	viewBox={`0 0 ${size} ${size}`}
	fill={color}
	stroke="currentColor"
	stroke-width={`${size / 12}`}
	stroke-linecap="round"
	stroke-linejoin="round"
>
	<circle cx={`${size / 2 + 0.1}`} cy={`${size / 2 + 0.1}`} r={`${size / 3}`} />
</svg>

