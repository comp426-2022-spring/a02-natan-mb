import { coinFlip, flipACoin } from "./modules/coin.mjs";

import { createRequire } from 'module';

let require = createRequire(import.meta.url);

var call = require('minimist')(process.argv.slice(2))["call"];

if (call != "heads" && call != "tails") {
    console.error("Error: no input.");
    console.info("Usage: node guess-flip --call=[heads|tails]");
} else {
    console.log(flipACoin(call));
}
