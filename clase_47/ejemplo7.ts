import {assertEquals, assertStrictEquals, assertNotStrictEquals} from "https://deno.land/std@0.154.0/testing/asserts.ts";


Deno.test("Test 1", function (): void {
    assertEquals("world", "world");
    assertEquals({hello: "world"}, {hello: "world"});
})

Deno.test("Test strictly equals", function (): void {
    const a = {};
    const b = a;
    assertStrictEquals(a, b);
})

Deno.test("Test not strictly equals", function (): void {
    const a = {};
    const b = {};
    assertNotStrictEquals(a, b);
})








