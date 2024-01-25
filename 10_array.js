/* -------------------------------------------------------------------------- */
/*                                  ARRAYS                                    */
/* -------------------------------------------------------------------------- */

/* NOTE : The Array object, as with arrays in other programming languages, 
   enables storing a collection of multiple items under a single variable name,
   and has members for performing common array operations. 

--> Array is an object.
--> JavaScript arrays are resizable and can contain a mix of different data types. 
--> JavaScript arrays are not associative arrays and so, array elements cannot be accessed using 
    arbitrary strings as indexes, but must be accessed using nonnegative integers 
--> JavaScript arrays are zero-indexed: the first element of an array is at index 0,
    the second is atindex 1, and so on — and the last element is at the value of the 
    array's length property minus 1.
--> Shallow copy :-
    A shallow copy of an object is a copy whose properties share the same references
     (point to the same underlying values) as those of the source object from which the 
     copy was made. As a result, when you change either the source or the copy, you may 
     also cause the other object to change too
--> Deep copy :- 
     deep copy of an object is a copy whose properties do not share the same references 
     (point to the same underlying values) as those of the source object from which the 
     copy was made. As a result, when you change either the source or the copy, you can
      be assured you're not causing the other object to change too.*/



const myArr  = [0,1,2,3,4,5]
const myHeroes = ["shaktiman","nagraaj"]
const myArr2 = new Array(1,2,3,4) //another way of declaring array.
console.log(myArr[0]);//Index of 0 is 0 

//Array Methods.-------------------------------------------------------------
console.log("anajkanajhnshnjkhnasfjkahnfjkasnf");
myArr.push(6)//It simply adds the values to the array 
myArr.push(7)

myArr.pop() // It removes the last value inside of an array

myArr.unshift(9) // This method adds the value in the starting position of an array 
myArr.shift() //This method removes  the value which were added  in the starting position of an array

console.log(myArr.includes(0));//True bcoz array includes 0 
console.log(myArr.includes(9));//Output will be false becoz above array didn't include 9 
console.log(myArr.indexOf(3)); // It gives output 1 because there is a index of 3
console.log(myArr.indexOf(8)); // It gives output -1 because there is a not any index of 8
console.log(myArr.indexOf(5)); //True
console.log(myArr);

const newArr = myArr.join() // Adds all the element of an array into a string.
console.log(newArr);// output will be not in [] this but it will be as 0,1,2,3,4,5,6

console.log(typeof newArr); // So join have binded the array as well as changes its datatype from array(object) to string.

//Slice and Splice 
console.log("A ", myArr );
const myn1 = myArr.slice(1,3) 
console.log(myn1); // output will be [ 1, 2 ]
console.log("B ", myArr );

const myn2 = myArr.splice(1,3) 
console.log("C ", myArr );
console.log(myn2);// output will be     C  [ 0, 4, 5, 6 ] [ 1, 2, 3 ]  so in the splice the original array is changed .


/* So the diffrence between slice and splice in the slice the range is not included but in splice the range is included . But the original array is changed by splice and in the slice the array is as it is  */