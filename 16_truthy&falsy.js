// const email = "husain@gmail.com"//yha v op got the mail aa rha
// if(email){
//     console.log("got the mail");
// }
// else{
//     console.log("dont have email");
// }

const email = []//yha empty array pe v output got the mail aa rha
if(email){
    console.log("got the mail");
}
else{
    console.log("dont have email");
}

//falsy values -> false, 0, -0., BigInt 0n, ""(empty string) , null, undefined,NaN,


//truthy values -> true, "0",  " "(empty string with space), "false", [],{}, function(){}

if (email.length===0){
    console.log('Array is empty');
}



const emptyObj = {}
if(Object.keys(emptyObj).length === 0 ){
    console.log('object is empty');
}


//Nullish Coalescing operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1= null ?? 10 //here op will be 10 
val1= null ?? 10 //here again op will be 10 
//agr value null,undefined aayi h to null assign kr do nhi to 10 kr do yhi kaam ?? ye operator krta h


console.log(val1);