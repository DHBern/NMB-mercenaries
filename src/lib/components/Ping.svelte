<script>
	let {  classes, isPulsating=true, setWhite = false } = $props();
	let color;
	if (setWhite) {
		color = ['bg-white', 'bg-white', 'bg-white border-white', 'bg-white border-white'];
	} else {
		color = ['bg-surface-400', 'bg-surface-900', 'bg-white', 'border-surface-900'];
	}

	// let isPulsating = $state(false);
	// setTimeout(() => {
	// 	isPulsating = true;
	// }, 5000);

</script>

{#if isPulsating}
	<span class={[classes, 'z-100 opacity-100']}>
		<span class={[color[0], 'absolute inline-flex h-full w-full animate-ping rounded-full']}>
			<span class={[color[1], 'absolute inline-flex h-full w-full animate-ping rounded-full']}>
				<span
					class={[color[2], 'absolute inline-flex h-full w-full animate-ping rounded-full border']}
				>
				</span>
				<span
					class={[color[3], 'absolute inline-flex h-full w-full animate-ping rounded-full border']}
				>
				</span>
			</span>
		</span>
	</span>
{/if}
