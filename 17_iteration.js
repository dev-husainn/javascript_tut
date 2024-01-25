/* ----------------------------------- loops------------------------------------ */
let index = 0
while (index <= 10) {
    //console.log(`Value of index is ${index}`);
    index = index + 2
    
}
/* ------------------------------------ - ----------------------------------- */
let myArray = ["flash", "superman", "batman"]
let arr1 = 0
while (arr1 < myArray.length) {
   // console.log(`value is ${myArray[arr1]}`);
    arr1 = arr1 + 1
    
}

/* ------------------------------------ - ----------------------------------- */

let score = 1

do {
    //console.log(`Score is ${score}`);
    score ++
} while (score <= 10);

/* ------------------------------------ - ----------------------------------- */

let scores = 11

do {
    //console.log(`Score is ${scores}`);
    scores ++
} while (scores <= 10);

//Here output is 11 because if condition does not match in while it will return do only.


/* ------------------------------- for of loop ------------------------------ */
// for (const iterator of object) {
     
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
    
}
//iterator-> we can give any name to this ,here we have given->  num
//object -> kis object pe loop lgana h to yha apna object 'arr' hai note yha ka object is {}object ko nhi refer kr rha

/* ------------------------------------ - ----------------------------------- */
const greetings = "hello world"
for (const greet of greetings) {
  //  console.log(`Each char is ${greet}`);
    
}

/* ---------------------------------- -Maps --------------------------------- */

// const map = new Map()//map object h
// map.set('IN',"India")
// map.set('USA',"United State of America")
// map.set('FR',"France")
 //console.log(map);
 //output 
 //    Map(3) {
//     'IN' => 'India',
//     'USA' => 'United State of America',
//     'FR' => 'France'
//   }
/* ------------------------------------ - ----------------------------------- */

const maps = new Map()//map object h
maps.set('IN',"India")
maps.set('IN',"India")//In map double entry is not supported, it will print only one time.

maps.set('USA',"United State of America")
maps.set('USA',"United State of America")

maps.set('FR',"France")
maps.set('FR',"France")
 //console.log(maps);

//  for (const key of maps) {
   // console.log(key);  //here we get op in form of array but if you don't want output in array then put []on the keys.
   for (const [key,value] of maps){
    //console.log(key,':-', value);
 }
 /* ------------------------------------ - ----------------------------------- */
//  const myObject = {
//     game1 : 'NFS',
//     game2 : 'BGMI'
//  }
//  for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
    
//  }
//NOTE: here we get error because object iterate nhi hota h for of loop se.


/* -------------------------------------for in loop--------------------------------- */
//method for iterating object

const myObject = {
    js : "javasscript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myObject) {
    //console.log(key);
   // console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

/* ------------------------------------ - ----------------------------------- */
const programming = ["js", "python","ruby", "java", "cpp"]
for (const key in programming) {
   // console.log(key);
    //console.log(programming[key]);
}
/* for of me array pure elements ke sath print hota h but for in me sirf keys value (index) print ho rhi h , to elements ko lane k liye hm programmng[keys] console krayenge*/


/* ------------------------------------ - ----------------------------------- */
//for in loop in map

const map = new Map()
 map.set('IN',"India")
 map.set('USA',"United State of America")
 map.set('FR',"France")
 map.set('IN',"India")
 for (const key in map) {
    //console.log(key);
    
 }
 //here output will be nothing , so map is not iteratable 

//NOTE: object ke andr loops lgana hoga to for in loop lga denge aur agar aray ke upar loop lgana hoga to for of loop  lga denge.


 /* --------------------------------**for each**------------------------------- */

 const coding = ["js", "ruby", "java", "python"]
//  coding.forEach( function name () {})

coding.forEach( function (item) {
//console.log(item);

})
//function ke parameters ko koi bhi name de do to yha hmne usko item ka name diya h 
//.forEach() ye khta hai ki call back function do .
//function call back me function ka name nhi hota h.

/* ------------------------ forEach by arrow function ----------------------- */

const hello = ["husain", "ahmad", "ansari", "welcome"]
hello.forEach( (item) => {
  //  console.log(item);
})   //arrow function


//or we can also do by this method by declaring function by passing onn 

function printMe(item){
   // console.log(item);
}
// hello.forEach(printMe)


//jb hme item ka index ka list aur array pta krna ho to 
hello.forEach((item , index, arr) => {
   // console.log(item,index,arr);
})

/* ------------------------------------ - ----------------------------------- */
const myCoding = [
    {
    languageName : "javascript",
    languageFileName : "js"
},
    {
    languageName : "java",
    languageFileName : "java"
},
    {
    languageName : "python",
    languageFileName : "py"
}
]
myCoding.forEach((item) => {
    console.log(item.languageName);
}) 