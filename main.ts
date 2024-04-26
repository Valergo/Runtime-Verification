import * as Quadratic from "./quadratic";

import * as process from "process";

if (process.argv.length !== 3) {
  throw new Error("Wrong number of arguments");
}

console.log(Quadratic.roots(process.argv[2]));
