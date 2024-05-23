const name = "saniya"
const num = 50;

console.log(`My name is ${name} and my number is ${num}`)

const gameName = new String('saniyaaa')
console.log(gameName.__proto__) //empty string

console.log(gameName.charAt(2))
console.log(gameName.indexOf('e'))

const str = 'ab-cd-efg'
console.log(str.substring(0, 4)) //start, end -> end not included

console.log(str.slice(-8, 4))

// trim -> remove whitespaces and /n
// trimstart and trimEnd

const url = 'saniya ali@gmail.com'
console.log(url.replace(' ', '_'))
console.log(url.includes('ali'))
console.log(str.split('-'))