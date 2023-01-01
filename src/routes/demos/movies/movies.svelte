<script>
	import { onMount } from 'svelte';
	let movies = [];
	onMount(async () => {
		const res = await fetch(
			'https://api.themoviedb.org/3/movie/top_rated/?api_key=de15c54b61b034324d0e337a788e499d'
		);
		const data = await res.json();
		if (res.ok) {
			movies = data.results;
			return;
		}
	});
</script>

<h1>Here are the current top movies</h1>
{#if movies.length > 0}
	{#each movies as movie}
		<p>{movie.title}</p>
	{/each}
{:else}
	Movies could not be fetched
{/if}
