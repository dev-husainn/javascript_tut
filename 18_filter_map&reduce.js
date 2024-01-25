
const myNumbers = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNumbers.map((num) => num + 10)
// const newNums = myNumbers.map((num) => { return num + 10)} //agr scope{} lgega to return keyword likhna hi pdega otherwise output undefined aayega.
console.log(newNums);


/* --------------------------------- chaining -------------------------------- */

const numbers = [1,2,3,4,5,6,7,8,9,10]
const newnum = numbers.map((num)=> num * 10)
.map((num)=> num+1)//chaining hogi to new number ye h jayega fir operation ispe perform hoge
.filter((num)=> num>=40)
console.log(newnum);

/* ------------------------------ reduce method ----------------------------- */

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
 // Expected output: 10


  const myNo = [1,2,3]


//   const myTotal = myNo.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`);
//     return acc + currval
//   }, 0)//yha jo v comma ke bad value denge wo accumulator initialize kr lega
//   console.log(myTotal);

/* ------------------------------------ - ----------------------------------- */
const myTotal=myNo.reduce( (acc , currval)=> acc + currval, 0)
// console.log(myTotal);

/* ------------------------------------ - ----------------------------------- */

const shoppingCart = [
    {
    itemname : " js course",
    price : 3000
},
    {
    itemname : " python course",
    price : 2000
},
    {
    itemname : " web dev course",
    price : 6000
},
    {
    itemname : "datascience",
    price : 12000
},
]
const priceToPay = shoppingCart.reduce((acc,item) =>acc + item.price, 0)
console.log(priceToPay);
