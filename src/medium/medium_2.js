import mpg_data from "./data/mpg_data.js";
import { getStatistics } from "./medium_1.js";

//allCarStatsDone

/*
This section can be done by using the array prototype functions.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
see under the methods section
*/


/**
 * This object contains data that has to do with every car in the `mpg_data` object.
 *
 *
 * @param {allCarStats.avgMpg} Average miles per gallon on the highway and in the city. keys `city` and `highway`
 *
 * @param {allCarStats.allYearStats} The result of calling `getStatistics` from medium_1.js on
 * the years the cars were made.
 *
 * @param {allCarStats.ratioHybrids} ratio of cars that are hybrids
 */
var years = [];
var hybridCount = 0;
var avgMilesPerGallonCity = 0;
var avgMilesPerGallonHighway = 0;
for (let i = 0; i < mpg_data.length; i++) {
    //get years
    years[i] = mpg_data[i].year;
    //count hybrids;
    if (mpg_data[i].hybrid) {
        hybridCount++;
    }
    //calculate average mpg
    avgMilesPerGallonCity += mpg_data[i].city_mpg;
    avgMilesPerGallonHighway += mpg_data[i].highway_mpg;
}
avgMilesPerGallonHighway /= mpg_data.length;
avgMilesPerGallonCity /= mpg_data.length;


export const allCarStats = {
    avgMpg: {city: avgMilesPerGallonCity, highway: avgMilesPerGallonHighway},
    allYearStats: getStatistics(years),
    ratioHybrids: hybridCount / mpg_data.length,
};



/**
 * HINT: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * @param {moreStats.makerHybrids} Array of objects where keys are the `make` of the car and
 * a list of `hybrids` available (their `id` string). Don't show car makes with 0 hybrids. Sort by the number of hybrids
 * in descending order.
 *
 *[{
 *     "make": "Buick",
 *     "hybrids": [
 *       "2012 Buick Lacrosse Convenience Group",
 *       "2012 Buick Lacrosse Leather Group",
 *       "2012 Buick Lacrosse Premium I Group",
 *       "2012 Buick Lacrosse"
 *     ]
 *   },
 *{
 *     "make": "BMW",
 *     "hybrids": [
 *       "2011 BMW ActiveHybrid 750i Sedan",
 *       "2011 BMW ActiveHybrid 750Li Sedan"
 *     ]
 *}]
 *
 *
 *
 *
 * @param {moreStats.avgMpgByYearAndHybrid} Object where keys are years and each year
 * an object with keys for `hybrid` and `notHybrid`. The hybrid and notHybrid
 * should be an object with keys for `highway` and `city` average mpg.
 *
 * Only years in the data should be keys.
 *
 * {
 *     2020: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *     2021: {
 *         hybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         },
 *         notHybrid: {
 *             city: average city mpg,
 *             highway: average highway mpg
 *         }
 *     },
 *
 * }
 */

//map: keys are makes, values are hybrid counts
const mapOfHybrids = new Map();
for (let i = 0; i < mpg_data.length; i++) {
    if (!mapOfHybrids.get(mpg_data[i].make)) {
        mapOfHybrids.set(mpg_data[i].make, 0);
    } else {
        let newCount = mapOfHybrids.get(mpg_data[i].make) + 1;
        mapOfHybrids.set(mpg_data[i].make, newCount);
    }
}
console.log(mapOfHybrids);



export const moreStats = {
    makerHybrids: undefined,
    avgMpgByYearAndHybrid: undefined
};
