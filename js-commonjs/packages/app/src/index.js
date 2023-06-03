const foo = require("@my/lib");
const bar = require("@my/nested-lib-a");
const baz = require("@my/nested-lib-b");

console.log("Hello world!");

console.log(`This is a library call: ${foo()}`);

console.log(`We can call the other ones, too: ${bar()} ${baz()}`);
