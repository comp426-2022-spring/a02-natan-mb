import { countFlips, coinFlips } from "./modules/coin.mjs";

import { createRequire } from 'module';

let require = createRequire(import.meta.url);

var numFlips = require('minimist')(process.argv.slice(2))["number"] || 1;

var flips = coinFlips(numFlips);

console.log(flips);

console.log(countFlips(flips));
