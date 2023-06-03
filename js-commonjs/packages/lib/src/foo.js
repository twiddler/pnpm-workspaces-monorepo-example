const { ulid } = require("ulid");

function foo() {
  return ulid();
}

module.exports = { foo };
