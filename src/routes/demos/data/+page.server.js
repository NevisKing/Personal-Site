import {dataAuthKey} from "$env/static/private";
import { createClient } from '@supabase/supabase-js'
console.log(dataAuthKey);
console.log("test");

export const test = () => {
    return 2+2;
}

export async function load({params}) {
    
    const data = await loadData();
    console.log(data);
    return {
        value: 5,
        auth: dataAuthKey
    };
}

