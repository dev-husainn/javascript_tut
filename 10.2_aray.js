const marvel_heros = ["thor","ironman","spiderman",]
const dc_heros = ["superman","batman","flash"] 
const heroes = marvel_heros.concat(dc_heros)
console.log(heroes);//we can do the same thing by spread operator[...x , ...y, ...n]

//spread operator 
const allHeroes = [...marvel_heros,...dc_heros]
console.log(allHeroes);

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //-> when there is array in an array of array 
const realAnother = arr.flat(Infinity)
console.log(realAnother); //-> by the flat() we can arrange the depth of array.