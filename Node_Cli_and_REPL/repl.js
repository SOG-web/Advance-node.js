/**
 * * To create a custom node repl use the below code
 * * Using the below code, you can customize the way the repl should work
 * * repl mean -- read, eval(evaluate), print and loop
 */

let repl = require("repl"); // ? repl is a built in module in node

let r = repl.start({
  ignoreUndefined: true,
  replMode: repl.REPL_MODE_STRICT,
}); // ? Check the node js documentation on more customize keywords

// * you can add external stuff e.g library to the node repl with the code
r.context.lodash = require("lodash"); // ? adding lodash to the global context of this repl i.e lodash will work as default on this repl
