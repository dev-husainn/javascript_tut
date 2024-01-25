/* Stack memory stores all the primitive datatype*/
/* Heap memory stores all the refrence or non primitive data type */

let myYoutubename = "husaindot"
let anothername = myYoutubename 
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi :   "user@ybl"
}
let userTwo = userOne
userTwo.email = "husain@google.com"  //for accesing object element we use the .(dot) property..
console.log(userOne.email);
console.log(userTwo.email);