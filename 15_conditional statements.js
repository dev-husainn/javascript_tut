//if 
/* ----------------------------------- -- ----------------------------------- */
/*The if statement executes block if a condition is true. Typically, the condition evaluates to a Boolean value, which is true or false.The following shows the syntax of the if statement: 

if( condition )
   statement; */

/* ----------------------------------- -- ----------------------------------- */

 //First, declare and initialize the variable age to 18:  

const age = 18
if (age >=18) {
console.log("Valid for voting");
    
   }
//t’s possible to use an if statement inside another if statement. For example:

const userAge = 18;
const userState = "Developer";

if(userAge >= 18){
    if(userState == "Developer")
    console.log("We can write multiple if inside a if statement");
    

}
/* ----------------------------------- && ----------------------------------- */
//&& operator gives output when both or every the conditions are true.
const myAge = 20;
const myName = 'husain';

if (myAge==20 && myName=='husain') {
    console.log("welcome to vs code");
    
}

/* ---------------------------------- ||---------------------------------------- */
// || or operator give output if any single statement is true.
const username = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(loggedInFromGoogle || loggedInFromEmail){
console.log('User Logged In');
}


/* -----------------------------------if else------------------------------------- */

//NOTE: The if statement executes a block if a condition is true. When the condition is false, it does nothing. But if you want to execute a statement if the condition is false, you can use an if...else statement.

//Syntax--->  

 /*     if( condition ) {

} else { 

  }              */

  const Age = 20;
if (Age >= 20 ) {
    console.log('you can vote');
    
} else {
    console.log('cannot vote');
}

/* ----------------------------------- -- ----------------------------------- */

const userage = 20;
if (userage >= 25) {
    console.log('welcome');
} else {
    console.log('get out');
}


/* ------------------------------nesting of if else-------------------------- */
const balance = 1000;
if (balance < 500) {
    console.log("less than 500");
} else if(balance < 750 ) {
    console.log("less than 750");
    
}else if(balance < 900){
console.log("less than 900");
}
else {      // yha  else pe koi scope nhi hoga sirf statement 
    console.log("less than 1200");
}

/* ------------------------------- Switch-case------------------------------------- */
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

/*The switch statement evaluates an expression, compares its results with case values, and executes the statement associated with the matching case value.

switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    case value3:
        statement3;
        break;
    default:
        statement;
}*/

const month = 3 
switch (month) { //key (month) wo value hai jisko har bar check krna h.
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("Februar");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("any day");
        break;
}

//break ka use har ek case me nhi krenge to wo niche ke sbhi cases ko execute kr dega ek sath,except default case ko chord ke..
/* ------------------------------------ - ----------------------------------- */
const months = "march"
switch (months) { //key (month) wo value hai jisko har bar check krna h.
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("februar");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("any day");
        break;
}

/* ----------------------------------- -- ----------------------------------- */

/* --------------------------- ternanry operator?: -------------------------- */

//condition ? true : false
const price = 100
price <= 80 ? console.log("less than 80") : console.log("more than 80");

    