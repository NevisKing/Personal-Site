import { createClient } from "@supabase/supabase-js";

export function newRealtimeClient(eventsPerSecond){
    return createClient(
    'https://qojbkzgbayqmfocnejly.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvamJremdiYXlxbWZvY25lamx5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI4NDA1MjcsImV4cCI6MTk4ODQxNjUyN30.NEWeeUcGmUum6MM0zEEzebudMKVJbvXk1iiVJJqayxY',
    {
        realtime: {
            params: {
                eventsPerSecond: eventsPerSecond
            }
        }
    }
)
}
