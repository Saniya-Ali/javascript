let score = "33";

console.log(typeof score);

let valInNum = Number(score)
console.log((typeof valInNum));

// Null -> empty
// undefined -> not specified

// typeof(null) -> object
// type(undefined) -> undefined

/* type comparison
  dont do comparisons like  
    null/undefined > 0
    null/undefined == 0
    num/undefined >= 0
    they are unpredictable bcz comparison convert null/undefined to a number and equality ><>=<=etc does not
*/


