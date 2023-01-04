import { dataAuthKey, databaseUrl } from "$env/static/private";
import { createClient } from "@supabase/supabase-js";
export async function getBlogPosts() {
    const supabaseUrl = databaseUrl;
    const supabaseKey = dataAuthKey;
    const supabase = createClient(supabaseUrl, supabaseKey);
    const res = supabase.from("blog").select();
    return res;
}