          /* -------------------------------------------------------------------------- */
          /*                           //!DATATYPE CONVERSION                           */
          /* -------------------------------------------------------------------------- */


  let score = 33       // op will be 33 .
 //let score = '33abc' // op will be NaN .
//  let score = "Has"    // op will be string .
//  let score = true     // op will be 1 .
//  let score = false    // op will be 0 .
//   let score = null    // op will be 0 .
 // let score = undefined   // op will be NaN or Undefined. 

console.log(typeof score);
console.log(typeof (score));   // both are the same way line 14 and 15 .

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


       // ---------------------------------OPERATIONS--------------------------------------//    


 /*  console.log(2+2); [O/P in positive]
     console.log(2-2);[O/P in negative]
     console.log(2*2);[O/P in multiple]
     console.log(2**3);[O/p will be 2 to the power 3]
     console.log(5/2);[O/P in division]
     console.log(2%2);[O/P in remainder]   */
   

let str1 = "hello"
let str2 = " husain"
let str3 = str1 + str2 
console.log(str3);

console.log("1"+2);      /* output will be 12 not 3 bcoz if first or second number is string then the 
                         output will be attached together and no operation is performed */

console.log(2+"1");     // output wil be 21 
console.log(1+2);       // output will be 3
console.log("1"+2+2);   //output will be 122

console.log(2+1+"2");   /* Here first operation is performed between 1 and 2 them the 
                        string will be attached so the output will be 32 */  

// ----------------------------------------------------------------------------------------------------//

