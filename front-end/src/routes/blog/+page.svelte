<script>
<<<<<<< HEAD
    import Post from "./post.svelte";
    export let data = {};

=======
    import Post2022_12_19 from "$lib/blogPosts/2022_12_19.svelte";
    import Post2023_1_2 from "$lib/blogPosts/2023_1_2.svelte";
>>>>>>> 06f9108 (palette changes)
</script>


<h1>
    Nevis' blog
</h1>
<div>
<<<<<<< HEAD
    {#each data.posts as post}
        <Post text={post.text} date={post.date} />
    {/each}
=======
    <Post2023_1_2 />
    <Post2022_12_19 />
>>>>>>> 06f9108 (palette changes)
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