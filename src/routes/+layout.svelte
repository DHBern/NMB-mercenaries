<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<header><button>intro</button><button>language selectors</button></header>
{@render children()}
