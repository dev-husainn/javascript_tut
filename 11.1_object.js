

const tinderUser = new Object() 
tinderUser.Id = "123abc"
tinderUser.name = "husain"
tinderUser.IsLoggedIn = false 
// console.log(tinderUser);  /* output -> { Id: '123abc', name: 'husain', IsLoggedIn: false } */



//nesting of objects...
const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        userfullname : {
            firstname : "husain",
            lastname : "ahmad",

        }

    }

}
//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

//spread method in object --> it is used to merge the elements of object as well as arrays.
const obj1 = {1:"a",2: "b"}
const obj2 = {3:"c",4: "d"}
const obj3 = {4:"e",5: "f"}
const obj4 = {...obj1,...obj2,...obj3}//spread
console.log(obj4);
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

const users = [
    {
        id : 1,
        email:"h@gmail.com"
    },
    {
        id : 1,
        email:"h@gmail.com"
    },
    {
        id : 1,
        email:"h@gmail.com"
    },
    {
        id : 1,
        email:"h@gmail.com"
    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser)); // intersting thing is that its data type will be in array , o/p -> [ 'Id', 'name', 'IsLoggedIn' ]
console.log(Object.values(tinderUser)); // so yaha keys ki jo value hogi wo aayegi o/p me -> [ '123abc', 'husain', false ]
console.log(Object.entries(tinderUser)); /* array ke andr array milega o/p -> [ [ 'Id', '123abc' ], [ 'name', 'husain' ], [ 'IsLoggedIn', false ] ]
so entries me har ek key value ko array me bna dega jo uski first property hai hmesha key hogi aur second jo hogi wo value hogi hmesha.*/

console.log(tinderUser.hasOwnProperty('IsLoggedIn'));// boolean me output aata h is property ka
console.log(tinderUser.hasOwnProperty('IsLoggedOut'));// boolean me output aata h is property ka























