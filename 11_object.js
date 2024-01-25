// singleton 
//object literals 
// both are used for objects
// Object.create another way of creating an object
const mySym = Symbol("key1")
 const user = {
    names : "husain",  // yha names string k trh kam kr rha hai to console pe use string k form me hi print krayenge.
    age : 23,
    [mySym] : Symbol("myKey1"), // object ke andr symbol ko [] square braces ke andr likhna pdta h.
    location : "lucknow",
    email : "husain@google.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]
 }

console.log(user);

//objects values are accessed by .(dot) notation
console.log(user.email); ///use this method for accessing object elements 
console.log(user["email"]); //or use this 
console.log(user.age);
console.log(user[mySym]);

/*-----------------------------------------------NOTES------------------------------------------------*/

//objects ke andr variables string ke trh behave krte h to output me print krane k liye unhe string k form me likhna pdega "" deke.

/*You can access object properties in two ways:
objectName.propertyName

or

objectName["propertyName"]       */

const car = {type:"Fiat", model:"500", color:"white"};
//console.log(car.type);
//console.log(car["color"]);// or we can also write console.log(car.color) 


//const person = {firstName:"Husain", lastName:"Ahmad", age:50, eyeColor:"blue"};
//console.log(person["firstName"] + person["lastName"] + person["eyeColor"]); // ek sath object ke elements ko accesss krna ho to + operator  ka use krenge
user.greeting = function(){
   console.log("Hello js users ");
}
user.greetingTwo = function(){
   console.log(`Hello js user,${this.names}`); //this keyword ka use kr ke object ke elements ko access kr skte h
}
console.log(user.greeting());
console.log(user.greetingTwo());
/*Object Methods:-
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.*/

/*this keyword se hm object ke elements ko acess kr skte h 

-> In a function definition, this refers to the "owner" of the function.
-> In other words, this.names means the names property of this object.

*/
