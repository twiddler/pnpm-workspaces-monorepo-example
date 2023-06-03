import { foo } from "@my/lib/src/foo";
import { bar } from "@my/nested-lib-a";
import { baz } from "@my/nested-lib-b";

console.log("Hello world!");
console.log(`This is a library call: ${foo()}`);
console.log(`We can call the other ones, too: ${bar()} ${baz()}`);
