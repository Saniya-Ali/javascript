"use strict" //treat all js code as newer version

// alert(3+3) ----> works in browder not node

/*
Data Types - 
number
bigInt - add 'n' at the end of number to make it bigInt
string
boolean
null => standalone value  (empty value0)
undefined => value is  not assigned yet
symbol => used for uniqueness
object
*/

let age = 5;

console.log(typeof age);    //number
console.log(typeof null);   //object
console.log(typeof undefined);  //undefined


const id = Symbol('123')
const custId = Symbol('123')
console.log(id === custId)  //False

/**
DATA TYPES - Premitive & Non-Premitive
Primitive - string, number, boolean, null, undefined, symbol, bigInt
Non pre,itive - Array, objects, functions
Non premitive data types return object for typeof
*/