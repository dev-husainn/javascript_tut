const fruits = ["banana","orange","apple","mango"];
let b = fruits.pop()
let c = fruits.push("kiwi")
console.log(fruits);

const a = [1,2,3,4,5]
console.log(a.length);

const fruit = ["banana","orange","apple","mango"];
console.log(fruit.toString());

const fruitss = ["banana","orange","apple","mango"];
console.log(fruitss.at(3));

const froots = ["banana","orange","apple","mango"];
console.log(froots.join("***"));

const x = [1,2,3,4,5,]
let y = x.pop()                   //removes the last element of array
console.log(x);

const m = [1,2,3,4,5,]
let n = m.push(99)               //adds the elements at the last of array
console.log(m);

const o = ["banana","orange","apple","mango"];
let p = o.shift()                //removes the first element of an array 
console.log(o);

const q = ["banana","orange","apple","mango"];
let r = q.unshift("kiwiiii")       //adds the element at the begining of an array 
console.log(q);


const s = ["banana","orange","apple","mango"];
s[0] = "papaya"             // changing elements -> array elements are accessed using their index number.
console.log(s);


/*-----------------------------------------SLICE&SPLICE------------------------------------------------*/

const methodSlice = ["banana","orange","lemon", "apple", "mango"];
console.log(methodSlice.slice(1)); //slice method slice out a piece of an array ,Slice out a part of an array starting from array element 1 ("Orange").

const mehtodSplice = ["banana","orange","lemon", "apple", "mango"];
let abc = mehtodSplice.splice(2,0,"kiwi","guvava")
console.log(mehtodSplice);

const myArr = ["banana","orange","lemon", "apple", "mango"];
const arrTwo = ["husain","ahmad","ansari"]
const myArray = myArr.concat(arrTwo)
console.log(myArray);

const methodFlat = [1,2,[3, 4 ,5],6 ,7, [8,9]]
console.log(methodFlat.flat(Infinity));  //The flat() method concatenates (adds) sub-array elements.


let ab = 100
let cd = 200
let ef = 300
console.log(Array.of(ab,cd,ef)); // Array.of() method returns a new aray from a set of element so the output is [ 100, 200, 300 ]
console.log(Array.from("husain")); // Array.from() method creates a new shallow copy array instance from an array like object 