// Set options as a parameter, environment variable, or rc file.
// eslint-disable-next-line no-global-assign
import esm from "esm"
//import { tenTimes } from "./src/spicy/spicy_9"
import { tenTimes } from "./src/spicy/spicy_9.js";
import {identifyArray} from "./src/mild/mild_2.js"

import {removeKey, removeKeyNonDestructive, removeKeys} from "./src/mild/mild_2.js"
import { searchHighPower } from "./src/medium/medium_3.js";
import { allCarStats } from "./src/medium/medium_2.js";
//import {getMedian} from "./medium/medium_1"
//MILD_1.js, remove type:modules
//console.log(sumToString(1,2));
//console.log(getIncreasingArray(3,7));
//**console.log(maxAndMin([1, 2, 3]));
//console.log(countArray([1, 1, 2, 3, 4, "hello"]));


//Mild_2.js
//console.log(identifyVariable(5));
//console.log(identifyArray(['some', 3, [3, 4], false]));

//Medium_1
/*let array = [
    14, 8, 5, 7, 7,
     5, 2, 7, 5, 3,
    47, 9
  ];
*/
//console.log(array.sort(function(a,b) {return a-b}));

//console.log(getMedian(array)); // 4.5

//Medium_2
// console.log(mpg_data[0]);
//console.log(tenTimes(2));
console.log(allCarStats);