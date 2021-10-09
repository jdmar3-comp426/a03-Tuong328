// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
import esm from "esm"

import { countArray, getIncreasingArray, maxAndMin, sumToString } from "./src/mild/mild_1.js";
import { identifyArray, identifyVariable } from "./src/mild/mild_2.js";
import {getMedian} from "./src/medium/medium_1";

//MILD_1.js, remove type:modules
//console.log(sumToString(1,2));
//console.log(getIncreasingArray(3,7));
//**console.log(maxAndMin([1, 2, 3]));
//console.log(countArray([1, 1, 2, 3, 4, "hello"]));


//Mild_2.js
//console.log(identifyVariable(5));
//console.log(identifyArray(['some', 3, [3, 4], false]));

//Medium_1
let array = [3,2,5,6,2,7,4,2,7,5];
console.log(getMedian(array)); // 4.5
console.log(3/2);