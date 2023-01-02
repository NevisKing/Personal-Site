<script>
    import FeedbackList from "./components/FeedbackList.svelte";
    import FeedbackItem from "./components/FeedbackItem.svelte";
    let feedback = [
        {id: 1,
        rating: 8,
        text: 'Happy birthday',
    },
    {id: 2,
        rating: 3,
        text: 'Merry birthday',
    },
    {id: 3,
        rating: 5,
        text: 'Jouous birthday',
    }
    ]

    const deleteFeedback = (event) => {
        const itemId = event.detail;

        feedback = feedback.filter((item) => {return item.id != itemId} )
    }

    $: count = feedback.length;
</script>

<body style="global.css">
    <h1>{count}</h1>
    <FeedbackList feedback={feedback} on:delete-feedback={deleteFeedback} />
</body>

<style>
    * {
        background-color: purple;
        color:blue;
    }
    
</style>