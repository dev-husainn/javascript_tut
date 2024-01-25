/* -------------------------------------------------------------------------- */
/*                                  //!Maths                                  */
/* -------------------------------------------------------------------------- */

const hundreds = 1000000


console.log(Math);
console.log(Math.abs(-4));
//abs ---> absolute value it changes only the negative value to the positive.


console.log(Math.round(4.6));
//.round ---> round offs the values.

console.log(Math.ceil(4.2));
//.ceil ---> ceiling mean top it tell if the value of 4 is slightly greater it will round off to the next number so output will be 5.

console.log(Math.floor(4.9));
// .floar ---> floar it means it round off the value to the lowest vaalue  so the output will be 4 .
console.log(Math.min(3,7,9,5,6,));//for finding the minimun value in an array.
console.log(Math.max(3,7,9,5,6,));//for finding the maximum value in an array.

/*------------------------------------------------------------------------------*/

console.log(Math.random());
// .random---> Math.random value will always come between the 0 and 1 

console.log(Math.random()*10 + 1 );
//We multiplied and plus one bcoz it will give value from 1 

console.log(Math.floor(Math.random()*10 + 1) );//Here it will roundoff the value to the lowest value by floar property.


/*Formula for random */

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);//Formula





