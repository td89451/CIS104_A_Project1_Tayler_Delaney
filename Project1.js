/**
 *  @author Delaney, Tayler (delaneyt@student.ncmich.edu)
 *  @version 0.0.1
 *  @summary CIS 104 A Project 1. River Falls Home Construction Company Calculator.
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber, bedroomCount, bathroomCount, garageSize, total;
const BASE_PRICE = 50000, BEDROOM_PRICE = 17000, BATHROOM_PRICE = 12500, PER_CAR_PRICE = 6000;

function main() {
    setLotNumber();
    setBedroomCount();
    setBathroomCount();
    setGarageSize();
    calcFinalPrice();
    printResults();
}

main();

function setLotNumber() {
    lotNumber = PROMPT.question(`\nPlease enter your lot number: `);
}

function setBedroomCount() {
    bedroomCount = PROMPT.question(`\nPlease enter desired number of bedrooms: `);
}

function setBathroomCount() {
    bathroomCount = PROMPT.question(`\nPlease enter desired number of bathrooms: `);
}
function setGarageSize() {
    garageSize = PROMPT.question('\nPlease enter desired size of garage: ');
}
function calcFinalPrice () {
    total = BASE_PRICE + BEDROOM_PRICE*bedroomCount + BATHROOM_PRICE*bathroomCount + PER_CAR_PRICE*garageSize;
}

function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\nIt will cost \$${total} to build your house at lot number ${lotNumber}.`);
}