import { getBlogPosts } from "$lib/server/database";


export async function load({params}) {
    const data = await getBlogPosts();
    const posts = data.data.sort((a,b) => new Date(a.date).getDate() - new Date(b.date).getDate());
    return {
        posts: posts
    };
}