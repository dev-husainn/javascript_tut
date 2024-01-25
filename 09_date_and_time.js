let myDate =  new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);//So the type of date is an object.

let myCreateadDate = new Date(2023,0,23)
console.log(myCreateadDate.toDateString());
//NOTE : In JS the month starts with the zero so the output is --> Mon Jan 23 2023 .

let myCreateadDates = new Date(2023,0,23,5,3)
console.log(myCreateadDates.toLocaleDateString());

let myCreateadDatesOne= new Date("2023-01-14")
console.log(myCreateadDatesOne.toLocaleDateString());

let myCreateadDatesOnes= new Date("01-14-2023")
console.log(myCreateadDatesOnes.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateadDate.getTime());
console.log(Math.floor(Date.now()/1000));  //Here we divided by 1000 for comparision in miliseconds.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()); //Here output will be 0 because 0 in JS is january .
console.log(newDate.getHours());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",
})