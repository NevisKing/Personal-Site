import { getBlogPosts } from "$lib/server/database";


export async function load({params}) {
    const data = await getBlogPosts();

    const posts = data.data.sort((a,b) => new Date(b.date) - new Date(a.date));

    return {
        posts: posts
    };
}