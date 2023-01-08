<script>
    import { createClient } from "@supabase/supabase-js";
    //import { broadcastMouse } from "$lib/sync/synctest";
    //import { listenMouse } from "$lib/sync/synctest";
    import { checkLatency } from "$lib/sync/synctest";

	import { newRealtimeClient } from "$lib/sync/realtime";
    let x = 0;
    let y = 0;

	const broadcastClient = newRealtimeClient(10);
	const listenClient = newRealtimeClient(10);
	
    function broadcastMouse() {

	// Channel name can be any string.
	// Create channels with the same name for both the broadcasting and receiving clients.
	const channel = supabase.channel('room1');
        channel.subscribe((status) => {
		if (status === 'SUBSCRIBED') {
			// now you can start broadcasting cursor positions

				channel.send({
					type: 'broadcast',
					event: 'cursor-pos',
					payload: { x: x, y: y }
				});
				//console.log(status);

			}
		}
	);

    }



    function listenMouse() {

	// Channel name can be any string.
	// Create channels with the same name for both the broadcasting and receiving clients.


	broadcastClient

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
    

    let newMessage = "";
	 function submitMessage(){
		const channel = broadcastClient.channel('room1');
         channel.subscribe(async (status) => {
		if (status === 'SUBSCRIBED') {
			// now you can start broadcasting cursor positions

				 await channel.send({
					type: 'broadcast',
					event: 'message',
					payload: {message: newMessage}
				});
				newMessage = "";
			}
			
		}
		
	);

	}
	let messages = [];
	function listenToMessages(){

	listenClient
		.channel('room1')
		.on('broadcast', { event: 'message' }, (payload) => {
            messages = messages.concat([payload.payload.message])
        })
		.subscribe((status) => {
			if (status === 'SUBSCRIBED') {
				
			}
		});
	}

	listenToMessages();


</script>

<div>
	{#each messages as message}
		<p>{message}</p>
	{/each}
	<label for="Message">Message</label>
	<form on:submit|preventDefault={submitMessage} autocomplete="off">
		<input type="text" id="Message" name="Message" bind:value={newMessage} ><br><br>
		<input type="submit" hidden />
	</form>
</div>

	


	


<style >
    button{
        min-width: 50px;
        min-height: 30px;
    }
    div{
        min-width: 300px;
        min-height: 500px;

		max-width: 70%;
    }
	p{
		word-break: break-all;
	}

</style>