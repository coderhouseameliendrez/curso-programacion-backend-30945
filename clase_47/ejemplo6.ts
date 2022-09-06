import { serve } from "https://deno.land/std@0.154.0/http/mod.ts";


serve((_req) => new Response("Hello, Coders"), {
    port: 8008,
    onListen({ port, hostname }) {
        console.log(`Server started at http://${hostname}:${port}`);
        // ... more info specific to your server ..
    },
});