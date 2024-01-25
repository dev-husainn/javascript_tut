 /* NOTE :  There are 7 types of primitive data type 
                1- String
                2- Number
                3- Boolean
                4- Null(enmpty)
                5- Undefined
                6- Symbol(unique value)
                7- BigInt                         */

                


/* For declaring symbol we use Symbol() */

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId );


/* Refrence or Non Primitive Datatype
                1- Arrays
                2- Objects
                3- Functions    */

const heros = ["shaktiman", "nagraj", "doga"];

//Object are declared within curly braces.
let myObj = {
    names : "Husain",
    age : 22,
}

//Declaration of function..
const myFunction = function(){
    console.log("Hello World");
}
 