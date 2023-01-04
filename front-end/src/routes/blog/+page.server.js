import { getBlogPosts } from "$lib/server/database";


export async function load({params}) {
    const data = await getBlogPosts();
<<<<<<< HEAD

    const posts = data.data.sort((a,b) => new Date(b.date) - new Date(a.date));

export async function load({params}) {
    const data = await getBlogPosts();
    const posts = data.data.sort((a,b) => new Date(a.date).getDate() - new Date(b.date).getDate());
=======
    const posts = data.data.sort((a,b) => new Date(b.date) - new Date(a.date));
>>>>>>> a04cb7f (blog order fix)
    return {
        posts: posts
    };
}