<script>
import { onMount, onDestroy } from 'svelte';

let {children,idx} = $props();

let x = $state(Math.random()*10);
let y = $state(Math.random()*10);
let interval;
let speedx = 0.02 * (Math.random() < 0.5 ? -1 : 1);
let speedy = 0.02 * (Math.random() < 0.5 ? -1 : 1);

const updatePosition = () => {
    x += speedx;
    y += speedy;
    // Reset position to create a looping effect
    if (Math.abs(x) > 10) {
        speedx = speedx * -1;
    }
    if (Math.abs(y) > 10) {
        speedy = speedy * -1;
    }
};
onMount(() => {
    interval = setInterval(updatePosition, 16);
});

// Clear the interval when the component is destroyed
onDestroy(() => {
    clearInterval(interval);
});
</script>

<div style="margin-left: {x}px; margin-top: {y}px"
>
    {@render children()}
</div>