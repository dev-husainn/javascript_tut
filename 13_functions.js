//A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
//When JavaScript reaches a return statement, the function will stop executing

//To avoid repeating the same code all over places, you can use a function to wrap that code and reuse it.
//To use a function, you need to call it. Calling a function is also known as invoking a function. To call a function, you use its name followed by arguments enclosing in parentheses like this:   functionName(arguments);



// function sayMyName(){
//     console.log("h");
//     console.log("u");
//     console.log("s");
//     console.log("a");
//     console.log("i");
//     console.log("n");
// }
// sayMyName()

//When declaring a function, you specify the parameters. However, when calling a function, you pass the arguments that are corresponding to the parameters.

function addTwoNumber (number1,number2){  
    // let result = number1+number2
    // return result
    return number1+number2
}
const result = addTwoNumber(3,5)
console.log("Result is : ", result);

/*To specify a return value for a function, you use the return statement followed by an expression or a value
function add (a,b){
    return a + b;
}     */
function loginUserMessage(username){
    return `${username} just logged in `
}
console.log(loginUserMessage("husain"));


function calculateCartPrice (num1){
    return num1

}
// console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200,400,500));//yha to output sirf 200 aayega lekin sare ko output me lane k liye hm rest(...) operator ka use krenge rest is like spread.


function calculateCartPriceTwo (...num2){ //rest operator(...) 
    return num2
}
console.log(calculateCartPriceTwo(200,400,500,2000));//output will come in form of array when we use rest operator in function


function calculateCartPriceThree (val1,val2,...num3){ //rest operator(...) 
    return num3
}
console.log(calculateCartPriceThree(200,400,500,2000));
//Here output is [ 500, 2000 ] because in val1 200 ,and in val2 it is 400 and the rest will go with rest operator.

function loginUserMesssage(username){
    return `${username} ,just logged in`
}
console.log(loginUserMessage("husain"));

/* -------------------------- Function with object -------------------------- */
const user = {
    username: "Husain",
    price: 1999
}
function handleObject(anyobject){    //yha anyobject k place pe kuch v likh skte h
    console.log(`username is ${anyobject.username}  and price is ${anyobject.price}`);
}
handleObject (user)//but yha actual object ko hi likhenge

/* ----------------------------------- -- ----------------------------------- */