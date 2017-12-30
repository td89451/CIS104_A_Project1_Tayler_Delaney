/**
 *  @author Delaney, Tayler (delaneyt@student.ncmich.edu)
 *  @version 0.0.1
 *  @summary CIS 104 A Project 1. River Falls Home Construction Company Calculator.
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNumber;
let bedroomCount;
let bathroomCount;
let garageSize;
let total;
const basePrice = 50000;
const bedroomPrice = 17000;
const bathroomPrice = 12500;
const perCarPrice = 6000;

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
    total = basePrice + bedroomPrice*bedroomCount + bathroomPrice*bathroomCount + garageSize*perCarPrice;
}

function printResults() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log("\nIt will cost $" + total + " to build your house at lot number " + lotNumber + ".");
}