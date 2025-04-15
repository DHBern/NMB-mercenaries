<script>
	let { classes, setWhite = false } = $props();
	let col;
	if (setWhite) {
		col = ['bg-white', 'bg-white', 'bg-white', 'border-white'];
	} else {
		col = ['bg-surface-500', 'bg-surface-900', 'bg-surface-100', 'border-surface-900'];
	}
</script>

<span class={[classes, 'opacity-100']}>
	<span class={[col, 'absolute inline-flex h-full w-full animate-ping rounded-full']}>
		<span class={[col, 'absolute inline-flex h-full w-full animate-ping rounded-full']}>
			<span class={[col, 'absolute inline-flex h-full w-full animate-ping rounded-full']}> </span>
			<span class={[col, 'absolute inline-flex h-full w-full animate-ping rounded-full border']}>
			</span>
		</span>
	</span>
</span>
