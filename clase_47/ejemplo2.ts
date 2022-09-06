import {parse} from "https://deno.land/std@0.154.0/datetime/mod.ts";

const myDate = parse("05-09-2022", "dd-mm-yyyy");
console.log(myDate);
