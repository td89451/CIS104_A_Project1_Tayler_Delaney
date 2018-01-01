/**
 *  @author Delaney, Tayler (delaneyt@student.ncmich.edu)
 *  @version 0.0.1
 *  @summary CIS 104 A Project 1. River Falls Home Construction Company Calculator.
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedroomCount, bathroomCount, garageSize, total;

/**
 * @method
 * @desc The dispatch method
 * @returns {null}
 */
function main() {
    setLotNumber();
    setBedroomCount();
    setBathroomCount();
    setGarageSize();
    calcFinalPrice();
    printResults();
}

main();

/**
 * @method
 * @desc Set the lot number
 * @returns {null}
 */
function setLotNumber() {
    lotNumber = PROMPT.question(`\nPlease enter your lot number: `);
}

/**
 * @method
 * @desc Set the amount of bedrooms
 * @returns {null}
 */
function setBedroomCount() {
    bedroomCount = PROMPT.question(`\nPlease enter desired number of bedrooms: `);
}

/**
 * @method
 * @desc Set the amount of bathrooms
 * @returns {null}
 */
function setBathroomCount() {
    bathroomCount = PROMPT.question(`\nPlease enter desired number of bathrooms: `);
}

/**
 * @method
 * @desc Set the size of the garage
 * @returns {null}
 */
function setGarageSize() {
    garageSize = PROMPT.question('\nPlease enter desired size of garage(in cars): ');
}

/**
 * @method
 * @desc Calculate the final price of building the house
 * @returns {null}
 */
function calcFinalPrice () {
    const BASE_PRICE = 50000, BEDROOM_PRICE = 17000, BATHROOM_PRICE = 12500, PER_CAR_PRICE = 6000;
    total = BASE_PRICE + BEDROOM_PRICE*bedroomCount + BATHROOM_PRICE*bathroomCount + PER_CAR_PRICE*garageSize;
}

/**
 * @method
 * @desc Output the final price of building the house
 * @returns {null}
 */
function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\nIt will cost \$${total} to build your house at lot number ${lotNumber}.`);
}