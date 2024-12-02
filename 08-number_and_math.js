//! NUMBER
let score = 500;
let scoreByNew = new Number(600);

//console.log(score); //500
//console.log(scoreByNew); //NUmber : 600
//console.log(score.length); //undefined
//? => number into string by use of "toString()"
//console.log(score.toString().length); //3
//? => use of toFixed()
let decimalNumber = 500.65;
//console.log(decimalNumber.toFixed(2)); //500.65
//console.log(decimalNumber.toFixed(1)); //500.6
//? => use of toPrecision()
let preciseNumber = 1545.54;
//console.log(preciseNumber.toPrecision(4)); //1546
//console.log(preciseNumber.toPrecision(3)); //1.55e+3
//console.log(preciseNumber.toPrecision(5)); //1545.5
//? => use of toLocaleString()
let localStringNumber = 100000000;
//console.log(localStringNumber.toLocaleString()); //100,000,000
//!it is defaut in U.S format
//!for IND format we use 'en-IN'
//console.log(localStringNumber.toLocaleString("en-IN")); //10,00,00,00

//*-----------------------------------------------------------------

//! ****** - MATH IN JS - **********

//console.log(typeof Math); //object
//console.log(Math.abs(-45)); //45
//console.log(Math.round(4.8)); //5
//console.log(Math.ceil(4.2)); //5
//console.log(Math.floor(4.9)); //4
//console.log(Math.min(2, 0, 3, 6, 73)); //0
//console.log(Math.max(2, 0, 3, 6, 73)); //73
//console.log(Math.random()); //value flexuate between 0 to 1 EXAMPLE -> 0.56458845

//console.log(Math.random() * 10); //decimal shit by one EXAMPLE -> 1.134385009873291
//console.log(Math.floor(Math.random() * 10)); //random value may be 9
//? => important formula 

let min = 10;
let max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+ min);
//raqndom value 13 

console.log(Math.pow(2,3)) //8
console.log(Math.sqrt(4)) //2
console.log(Math.trunc(4.8)) //output 4 //?trunc removes the decimal

