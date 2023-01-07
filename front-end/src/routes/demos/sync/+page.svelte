<script>
    import { createClient } from "@supabase/supabase-js";
    //import { broadcastMouse } from "$lib/sync/synctest";
    //import { listenMouse } from "$lib/sync/synctest";
    import { checkLatency } from "$lib/sync/synctest";
    let x = 0;
    let y = 0;

    function broadcastMouse() {
        const supabase = createClient(
		'https://qojbkzgbayqmfocnejly.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvamJremdiYXlxbWZvY25lamx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4NDA1MjcsImV4cCI6MTk4ODQxNjUyN30.NEWeeUcGmUum6MM0zEEzebudMKVJbvXk1iiVJJqayxY',
		{
			realtime: {
				params: {
					eventsPerSecond: 10
				}
			}
		}
	);

    
	// Channel name can be any string.
	// Create channels with the same name for both the broadcasting and receiving clients.
	const channel = supabase.channel('room1');

        channel.subscribe((status) => {
		if (status === 'SUBSCRIBED') {
			// now you can start broadcasting cursor positions
			setInterval(() => {
				channel.send({
					type: 'broadcast',
					event: 'cursor-pos',
					payload: { x: x, y: y }
				});
				//console.log(status);
			}, 100);
		}
	});
    }



    function listenMouse() {
	const supabase = createClient(
		'https://qojbkzgbayqmfocnejly.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvamJremdiYXlxbWZvY25lamx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4NDA1MjcsImV4cCI6MTk4ODQxNjUyN30.NEWeeUcGmUum6MM0zEEzebudMKVJbvXk1iiVJJqayxY',
		{
			realtime: {
				params: {
					eventsPerSecond: 10
				}
			}
		}
	);

    
	// Channel name can be any string.
	// Create channels with the same name for both the broadcasting and receiving clients.
	const channel = supabase.channel('room1');

        
// Subscribe registers your client with the server


	supabase
		.channel('room1')
		.on('broadcast', { event: 'cursor-pos' }, (payload) => {
            x = payload.payload.x;
            y = payload.payload.y;
        })
		.subscribe((status) => {
			if (status === 'SUBSCRIBED') {
			}
		});
}
    
    function updateMouse(event){
        x = event.clientX;
        y = event.clientY;
    }
    
    
</script>
<div on:mousemove={updateMouse}>
    <button on:click={broadcastMouse} > Broadcast</button>
<button on:click={listenMouse} > Listen</button>
<button on:click={checkLatency} > Latency</button>
<button >{x}, {y}</button>
</div>




<style >
    button{
        min-width: 50px;
        min-height: 30px;
    }
    div{
        min-width: 300px;
        min-height: 500px;
    }
</style>