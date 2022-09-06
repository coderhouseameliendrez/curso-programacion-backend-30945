//console.log(Deno);

console.log(Deno.args);

const PORT = Number(Deno.env.get("PORT")) || 8080;

console.log(PORT);

// PORT=3000 deno run --allow-env ejemplo4.ts 1 a d f
