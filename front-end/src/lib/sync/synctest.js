import { createClient } from '@supabase/supabase-js';

export function broadcastMouse() {
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
	channel.subscribe((status) => {
		if (status === 'SUBSCRIBED') {
			// now you can start broadcasting cursor positions
			setInterval(() => {
				channel.send({
					type: 'broadcast',
					event: 'cursor-pos',
					payload: { x: Math.random(), y: Math.random() }
				});
				//console.log(status);
			}, 100);
		}
	});
	// Supabase client setup
}



export function checkLatency() {
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
	const channel = supabase.channel('calc-latency', {
		config: {
			broadcast: { ack: true }
		}
	});

	channel.subscribe(async (status) => {
		if (status === 'SUBSCRIBED') {
			const begin = performance.now();

			await channel.send({
				type: 'broadcast',
				event: 'latency',
				payload: {}
			});

			const end = performance.now();

			console.log(`Latency is ${end - begin} milliseconds`);
		}
	});
}
