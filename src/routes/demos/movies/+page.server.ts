/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const res = await fetch('https://api.themoviedb.org/3/movie/top_rated/?api_key=de15c54b61b034324d0e337a788e499d');
    const data = await res.json();
    return 
      data.results
    ;
  }