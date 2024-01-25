/* ----------------------------------- -- ----------------------------------- */
function names (num1,num2){
return num1+num2
}
console.log(names(2,3));

/* ----------------------------------- -- ----------------------------------- */
function calculate(num1){
return num1
}
console.log(calculate(200));

/* ----------------------------------- -- ----------------------------------- */
 function calculated(...num4){
     return num4
     }
    console.log(calculated(200,400,500,50000,5758));
    //here output will come in the from of array :> function calculate(num1) [ 200, 400, 500, 50000, 5758 ]
   // when we use rest operator (...) in the function it will give op in array


   /* ---------------------------- Function hoisting --------------------------- */

// In JavaScript, you can use a function before declaring it
//NOTE: -> Function hoisting is a mechanism which the JavaScript engine physically moves function declarations to the top of the code before executing them.
/* ----------------------------------- -- ----------------------------------- */
showMe();  // a hoisting example 

function showMe(){
    console.log('an hoisting example');
}
/* ----------------------------------- -- ----------------------------------- */
console.log(calculated(200,400,500,50000,5758));//we can host function from anywhere.

function calculated(...num4){
    return num4
    }


/*Summary
->Use the function keyword to declare a function.
->Use the functionName() to call a function.
->All functions implicitly return undefined if they don’t explicitly return a value.
->Use the return statement to return a value from a function explicitly.
->The arguments variable is an array-like object inside a function, representing     function arguments.
->The function hoisting allows you to call a function before declaring it.*/