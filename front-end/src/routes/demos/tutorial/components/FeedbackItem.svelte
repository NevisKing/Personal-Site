<script>
    import {createEventDispatcher} from 'svelte'
    import Card from './Card.svelte'
    export let item;
    const dispatch = createEventDispatcher();

    const remove = (itemId) => {
        dispatch('delete-feedback', itemId);
    }

    
</script>

<Card>
    <div class="num-display">{item.rating}</div>
    <button class="close" on:click={() => remove(item.id)}>X</button>
    <p class="test-display">{item.text}</p>
</Card>


<style>
    .num-display{
        position: absolute;
        top: -10px;
        left: -10px;
        width: 50px;
        height: 50px;
        background: pink;
        color: white;
        border: 1px black solid;
        border-radius: 50%;
        text-align: center;
        padding:10px;
        font-size: 30px;
    }
    .close{ 
        position: absolute;
        top:10px;
        right:20px;
        cursor: pointer;
    }
</style>