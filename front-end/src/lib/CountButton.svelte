<script>
	import { text } from "svelte/internal";

    export let count = 0;
    function increment(){
        count += 1;
    }
</script>

<button on:click={increment}>{count}</button>
{#if count === 0}
    <p>You haven't clicked the button</p>
{:else if count < 10}
    <p>You've clicked the button a few times</p>
{:else}
    <p>You've clicked the button a lot</p>
{/if}