//!string
//strings are a fundamental data type used to represent and manipulate text. Strings in JavaScript are immutable[unchangeable], meaning their content cannot be altered after creation (though variables pointing to strings can be reassigned).

//*creating strings in JavaScript
//? by using string literals
//three way to declare strings
// 1.let a="hello world"
// 2.let b='hello universe'
// 3.let c=`string with backtick ${a}`

//? by using 'string' constructor
// let str = new String("Hello, World!");
// console.log(str);

//! strings properties

//* 1. characters access
//?use of "charAt()"
// let a = "abhiraj jaiswal";
// console.log(a.charAt(6));
//? as array
// console.log(a[3]);

//? find index no;. string
// console.log(a.indexOf('j'));

//*2. find length of string by usng "length"
// console.log("length of string", a.length); //15

// //*3. change font style
// console.log("uppercase of string", a.toUpperCase()); //ABHIRAJ JAISWAL

// console.log("lowercase of string", a.toLowerCase()); //abhiraj jaiswal

//*4. charCodeAt(index) => give unicode character

// let str = "Abhiraj"
// console.log(str.charCodeAt(2));

//*5. concatenation of two string
//? => concat(name_of_another_string)
// let str1="abhiraj,"
// let str2 = "jaiswal"
// console.log(str1.concat(str2)); //abhiraj,jaiswal

//*4 include(searchString,position)
//? check if a string contains the specified substring
//searchString : substring to search for.
//position (optional) : start position for the search

//!example => use only searchString
// let str = "hello world!"
// console.log(str.includes("!")); //true

//!EXAMPLE => use position as well as searchString

// let str1 = "hello world!"
// console.log(str1.includes("world", 8)); //false
//? beacuse search begin with index no. 6.
// console.log(str1.includes("world",5));//true

//*5. endswith(searchString,length)
//? Checks if a string ends with the specified substring.

// let str = "Hello, World!";
// console.log(str.endsWith("World!")); // Output: true

//*6. indexof(searchValue,fromIndex)
//? Returns the index of the first occurrence of the specified substring, or -1 if not found.

// let str = "Hello, World!";
// console.log(str.indexOf("o", 5)); // Output: 4

//!notes of its
//if vlaue is not found then return -1

//*7. lastIndexOf(searchValue,fromIndex)

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const searchTerm = "dog";

// console.log(
//   `Index of the last ${searchTerm} is ${paragraph.lastIndexOf(searchTerm)}`
// );
//// Expected output: "Index of the last "dog" is 38"

//*8. localecompare(comparestring,locales,options)

//api is work that is intl.COllator()

//?talking about parameters
//1.comparestring
//2.locales [optional] locale for comparison
// string with a BCP 47 language tag (e.g., "en-US", "fr-FR") 
//3.options [optional] comparison options

//!EXAMPLE =>
// let str1 = "a";
// let str2 = "b";
// console.log(str1.localeCompare(str2)); // Output: -1 (because "a" < "b")

//todo => return value
//  -1: If string1 is sorted before string2.
//   0: If string1 is equal to string2.
//   1: If string1 is sorted after string2.
//!EXAMPLE =>
console.log('a'.localeCompare('b')); // -1
console.log('b'.localeCompare('a')); // 1
console.log('a'.localeCompare('a')); // 0

//*9. slice (startIndex,endIndex)

// let str ="Hello, World!"
// console.log(str.slice(0,5));
//output : "hello"


//*10. split(separator,limit)
//? its used to divide a string into an array of substrings
// let str = "a,b,c";
// console.log(str.split(" ")); // Output: ["a", "b", "c"]

// let str1 = "lorem ipsum dolor sit amet"
// console.log(str1.split(" ")); //split by space
//output =>[ 'lorem', 'ipsum', 'dolor', 'sit', 'amet' ]

// let str2 = "apple,banana,cherry";
// console.log(str2.split(","));//split by coma
//output =>[ 'apple', 'banana', 'cherry' ]

// let text = "one-two-three-four";
// let result = text.split("-", 2); // Split by a hyphen, limit to 2 parts
// console.log(result); // ["one", "two"]

// let data = "a1b2c3d4";
// let result1 = data.split(/\d/); // Split by digits
// console.log(result1); // ["a", "b", "c", "d", ""]

// let text1 = "HelloWorld";
// let result2 = text1.split();
// console.log(result2); // ["HelloWorld"]

// let text2 = "JavaScript";
// let chars = text2.split(""); // Empty string as separator
// console.log(chars); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

//* startsWith(searchString,position)

//?Checks if a string starts with the specified substring.
//!EXAMPLE
// let str = "Hello, World!";
// console.log(str.startsWith("Hello")); // Output: true

//* Substring (startIndex,endIndex)
//?Extracts characters between two indices.

//!Example
// let str1 = "Hello, World!";
// console.log(str1.substring(0, 5)); // Output: "Hello"

//* trim()
//? removes whitespace form both ends of the string

//!EXAMPLE
// let str = "  Hello, World!  ";
// console.log("removing white space from both end of string",str.trim()); // Output: "Hello, World!"

//*trimStart()/trimLeft()
//? Removes whitespace from the beginning of the string.

//!EXAMPLE
// let str1 = "  Hello, World!  ";
// console.log("removing white space from start end",str1.trimStart()); // Output: "Hello, World!  "

//*trimEnd()/trimRight()
//? Remolet str = "  Hello, World!  ";
// console.log("removing white space from  end",str.trimEnd()); // Output: "  Hello, World!"

//* replace(replacement,inPlaceOfReplacement)
//! EXAMPLE

let url="https://abhiraj.com/abhiraj%20jaiswal"
console.log(url.replace('%20','-'));

//expected output => https://abhiraj.com/abhiraj-jaiswal

//* repeat()
//? Repeats the string count times.
let str = "A";
console.log(str.repeat(5)); // Output: "AAA"
