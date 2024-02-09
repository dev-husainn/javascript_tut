                        "use strict"; //!treat all JS to the newer version.

        /* -------------------------------------------------------------------------- */
        /*                        //! Data types in javascript                        */
        /* -------------------------------------------------------------------------- */

// number = 2 to the power 52 or int is the range . Represents both int and float.

//boolean= NOTE: There are only two Boolean values, true and false.

//string= "abcdefgh" 

//null= standalone value or empty (representation of empty value)

//undefined = 

//symbol = for identifying uniqueness.

//object= (it is the one of the most important data type we will learn it later.)

        /* -------------------------------------------------------------------------- */
        /*                      //!DATA TYPES AND ITS BASIC NOTES                      */
        /* -------------------------------------------------------------------------- */


let name = "abc"        // !name is a string data type it is declared with "xyz"   .
let age = 18 // age is a number data type.
let isLoggedIn = true/false // boolean data type which give output in the form of true or false.


/*To determine the current type of  value stored in a variable, use the *typeof* operator: */

console.log(typeof age ); // output will be number.

console.log(typeof undefined); // output will be undefined. 

                /*Conceptually, undefined indicates the absence of a value,
                while null indicates the absence of an object
                (which could also make up an excuse for typeof null === "object"). */

console.log(typeof null); // !output will be as object.
