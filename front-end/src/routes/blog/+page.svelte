<script>
    import Post from "./post.svelte";
    export let data = {};

</script>


<h1>
    Nevis' blog
</h1>
<div>
    {#each data.posts as post}
        <Post text={post.text} date={post.date} />
    {/each}
</div>


<style>
    div {
        margin: auto;
        border: 5px  red;
        padding: 10px;
    }
    h1 {
        padding: 20px;
        color: #DCD7C9;
    }
</style>