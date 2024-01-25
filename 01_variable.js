/* -------------------------------------------------------------------------- */
/*                                  VARIABLES                                */
/* -------------------------------------------------------------------------- */

/*JavaScript uses the keywords var, let and const to declare variables 
NOTE:-Variables are containers for storing values.

When to Use var, let, or const? :--->

1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.                        */

let x = 5;
let y = 6;
let z = x + y;
console.log(z);


/*When to use JavaScript const?
Always declare a variable with "const" when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp*/

const cars = ["Saab", "Volvo", "BMW"];
const a = 5;
const b = 9;
const c = a + b;
console.log(cars + c);

var accountId = 14454
let accountEmail= 'aabc@gmail.com'
let accountState;             //output will be here undefined.

/*  if a variable is declared without assigning the value
it will be undefined ....for example in above
let accountState; will give undefined as output..*/

console.table([accountId,accountEmail,accountState]);
//console.table([]); it gives output in tabular structure.