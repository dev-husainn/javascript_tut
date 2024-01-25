//Strings are text, written within double or single quotes:



const namee = "husain"
const repoCount = 50 
console.log(namee+repoCount);
console.log(namee+repoCount+" Value");

console.log(`Hello my name is ${namee} and my repocount is ${repoCount}`); /*  NOTE:: This is the 
String Interpolationn method for writing the string together it  is decclared by consoel.log(`${}`) 
backtick with the dollarr sign and curly braces 
in curly braces we write the variable name which we have to get output. */


/* -------------------------------------------------------------------------- */
/*                               //!String Types                              */
/* -------------------------------------------------------------------------- */
const gameName = new String (`husain`)
console.log(gameName[0]);//This give the 0th position of string .
console.log(gameName.length);//This give the total lenght of string .
console.log(gameName.toUpperCase());//This property does the string in UPPERCASE form.
console.log(gameName.charAt(2));//This property tell the position of character or string.
console.log(gameName.indexOf('a'));//This tells the index of the character at which position they are . 

const newString = gameName.substring(0,4)
console.log(newString);// This substring tell the character postion from 0 index to 4th index so the output will husa.

const anotherString = gameName.slice(-5,4)
console.log(anotherString);//This give the output from negative index side so output will be usa.

const newStringOne = "     husainn    "
console.log(newStringOne); //Here output comes with the spaces wee have provided.
console.log(newStringOne.trim());//But here by the trim property the spacaes automatically removed.

const url = "https://husain.ahmad%20ansari"
console.log(url.replace(`20`,`-`));
console.log(url.includes(`sundar`)); //It will return false bcoz there is no such element in the url.
console.log(gameName.split(`-`) );
//It will give output in the form of array.

/* 0
: 
"H"
1
: 
"u"
2
: 
"s"
3
: 
"a"
4
: 
"i"
5
: 
"n"
length
: 
6
[[Prototype]]
: 
String
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"Husain"  */


/*NOTE: Strings are returned as-is.
undefined turns into "undefined".
null turns into "null".
true turns into "true"; false turns into "false".
Numbers are converted with the same algorithm as toString(10).
BigInts are converted with the same algorithm as toString(10).
Symbols throw a TypeError.
Objects are first converted to a primitive by calling its 
[@@toPrimitive]() (with "string" as hint), toString(), and valueOf() methods,
in that order. The resulting primitive is then converted to a string. */


