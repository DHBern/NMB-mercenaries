<script>
	let { isPulsating = true } = $props();
</script>

<circle
	id="seasia-banjarmasin"
	class="circle-38-92 marked seasia-banjarmasin"
	cx="925"
	cy="385"
	r="4.5"
	style="transform-origin: 925px 385px"
/>
<circle
	id="seasia-banjarmasin-ping"
	class={[
		'circle-38-92 marked seasia-banjarmasin',
		isPulsating && 'origin-center animate-ping opacity-100'
	]}
	cx="925"
	cy="385"
	r="4.5"
	style="transform-origin: 925px 385px"
/>
<circle
	id="seasia-padangse"
	class="circle-50-61 marked seasia-padangse"
	cx="615"
	cy="505"
	r="3.9647"
	style="transform-origin: 615px 505px"
/>
<circle
	id="seasia-padangse-ping"
	class={[
		'circle-50-61 marked seasia-padangse',
		isPulsating && 'origin-center animate-ping opacity-100'
	]}
	cx="615"
	cy="505"
	r="3.9647"
	style="transform-origin: 615px 505px"
/>
<circle
	id="seasia-batavia"
	class="circle-61-76 marked seasia-batavia"
	cx="765"
	cy="615"
	r="4.5"
	style="transform-origin: 765px 615px"
/>
<circle
	id="seasia-batavia-ping"
	class={[
		'circle-61-76 marked seasia-batavia',
		isPulsating && 'origin-center animate-ping opacity-100'
	]}
	cx="765"
	cy="615"
	r="4.5"
	style="transform-origin: 765px 615px"
/>
