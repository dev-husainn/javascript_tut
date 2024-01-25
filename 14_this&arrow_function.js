const user ={
username:"husain",
price:999,
welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
}
}
user.welcomeMessage() //ye ek method h jayega kyuki object ke andr ke functions ko method khte h.


/* ------------------------------ arrowfunction ----------------------------- */

function chai (){
    console.log("h");
}
chai()

// const chai = function(){
//     let username = "husain"
//     console.log(this.username);//function ke andr this keyword work nhi krta h .
// }
// chai()

/* ----------------------------------- -- ----------------------------------- */

const chais = () => {//arrow function
       let username = "husain"  
        console.log(this);//fn ke andr this keyword ka output empty object aayega {} 
}
chais()

//arrow function bnane k liye function keyword ko remove kr dijiye aur ()  => {} kr do

/* ----------------------------------- -- ----------------------------------- */

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4));


/* implicit return  --> isme parenthesis{} ko remove kr dete h aur return keyword ko v aur, sbko ek line me laynge--*/

// const addTwo = (num1,num2)=>  num1+num2
const addTwo = (num1,num2)=>  (num1+num2) //yha value ko paranthesis m wrap kiya gya h

console.log(addTwo(3,4));

//note: agar curly braces use hua to "return" keyword likhna hi pdega aur agr parenthesis use hua to return nhi likhna pdega