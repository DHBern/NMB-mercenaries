<script>
	let { classes, setWhite = false } = $props();
	let color;
	if (setWhite) {
		color = ['bg-white', 'bg-white', 'bg-white', 'border-white'];
	} else {
		color = ['bg-surface-500', 'bg-surface-900', 'bg-surface-100', 'border-surface-900'];
	}
</script>

<span class={[classes, 'opacity-100 z-100']}>
	<span class={[color, 'absolute inline-flex h-full w-full animate-ping rounded-full']}>
		<span class={[color, 'absolute inline-flex h-full w-full animate-ping rounded-full']}>
			<span class={[color, 'absolute inline-flex h-full w-full animate-ping rounded-full']}> </span>
			<span class={[color, 'absolute inline-flex h-full w-full animate-ping rounded-full border']}>
			</span>
		</span>
	</span>
</span>
