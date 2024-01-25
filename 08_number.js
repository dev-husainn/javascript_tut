const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(1));//output 100.0 

const otherNumber = 23.8966
console.log(otherNumber.toPrecision());
console.log(otherNumber.toPrecision(3));

const otherNumbers = 123.8966
console.log(otherNumbers.toPrecision(3));
const hundres = 1000000
console.log(hundres.toLocaleString());
//This property makes the zeroes easily readable by adding commas to the numbers so the output will come in the form of 1,000,

console.log(hundres.toLocaleString('en-IN'));
//This property .toLocaleString('en-ID')makes the zeroes easily readable by adding commas in the indian standard form  to the numbers so the output will come in the form of 10,00,000  
