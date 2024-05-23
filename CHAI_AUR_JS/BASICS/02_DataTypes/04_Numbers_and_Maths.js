const score = 400

const balance = new Number(100)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(1))

const num2 = 23.4567
console.log(num2.toPrecision(3))

const hundreds = 100000000
console.log(hundreds.toLocaleString('en-IN')) //add commas

// const min = MIN_VALUE
// const max = MAX_VALUE
// Number.MIN_VALUE
// Number.MAX_VALUE

//*************MATHS*****************

// console.log(Math.abs(-4))
// console.log(Math.round(3.8))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(5.89))

console.log(Math.random()) //value always between 0 and 1
console.log((Math.random()*10)+1) //min value will be 1

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)
