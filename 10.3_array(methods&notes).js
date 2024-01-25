// array methods

//1--> array length
const names = ["husain", "arman", "irshad", "faiji", ];
 let size = names.length
 console.log(names);
 console.log(size);

 //2--> array toString()

 const fruits = ["banana","orange","apple","mango"];
 console.log(fruits.toString())

 // --> array join()
 const fruitss = ["banana","orange","apple","mango"];
console.log(fruits.join("$")); // op is banana$orange$apple$mango

//--> array pop()->  The pop() method returns the value that was "popped out"
const fruits3 = ["banana","orange","apple","mango"];
let removeEl = fruits3.pop()
console.log(`Romeved El ${removeEl}`);
console.log(`Fruits 3 array : ${fruits3}`);

console.log(fruits3.pop()); // It returns those value which popped out so mango is popped out so output is mango

//--> array push() -> The push() method adds a new element to an array (at the end) and ,The push() method returns the new array length:
const fruits4 = ["banana","orange","apple","mango"];
console.log(fruits4.push("Kiwi"));
console.log(fruits4);

const fruitsc = ["Banana", "Orange", "Apple", "Mango"];
let length = fruitsc.push("Kiwi"); 
console.log(length); //The push() method returns the new array length:

//-->array shift() -> The shift() method returns the value that was "shifted out": and, The shift() method removes the first element of an array (and "shifts" the other elements to the left):
const fruits5 = ["banana","orange","apple","mango"];
console.log(fruits5.shift());
console.log("HSHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH");

//array unshift() -> The unshift() method adds new elements to the beginning of an array:
//Banana,Orange,Apple,Mango
//Lemon,Banana,Orange,Apple,Mango
// The unshift() method returns the new array length:

const fruits6 = ["banana","orange","apple","mango"];
console.log(fruits6.unshift("lemon"));
console.log(fruits6);

//changing elements -->  Array elements are accessed using their index number:

const fruits7 = ["banana","orange","apple","mango"];
fruits7[0] = "kiwi"
console.log(fruits7);

// array slice()-> The slice() method slices out a piece of an array
// Slice out a part of an array starting from array element 1 ("Orange"):
console.log("SSSSLLLLIIIIICCCCEEEEE");

const fruits8 = ["banana","orange","apple","lemon", "mango"];
console.log(fruits8.slice(1));
console.log(fruits8.slice(3));
console.log(fruits8.slice(4));


// array splice()--> The splice() method adds new items to an array.
const fruits9 = ["banana","orange","apple", "mango"];

console.log(fruits9.splice(2,0,"lemon","kiwi"));
console.log(fruits9);

/*The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items: */

const fruits10 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits10.splice(2,2,"lemon","kiwi"));
console.log(fruits10);

/*Original Array:
Banana,Orange,Apple,Mango

New Array:
Banana,Orange,Lemon,Kiwi

Removed Items:
Apple,Mango*/

// array concat() -->The concat() method creates a new array by merging (concatenating) existing arrays:

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

