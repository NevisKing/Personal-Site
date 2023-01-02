<script>
    import FeedbackItem from "./FeedbackItem.svelte";
    export let feedback = [];

    console.log(feedback);
</script>

<div>
    {#each feedback as fb}
    <FeedbackItem item={fb} on:delete-feedback />
{/each}
</div>



<style>
    div{
        position: relative;
        size: 100%;

    }
</style>