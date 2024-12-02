//! ARRAY

//todo => creating arrays
//* using array literal :-
// dataType variableName = ['a','b','c','d']
//todo => EXAMPLE
const fruits = ["apple", "banana", "cherry"];
//console.log(fruits);

//* using ARRAY constructor
let number = new Array(1, 2, 3);
//console.log(number)
//*using Array.of()
const mixed = Array.of(1, "two", true); // [1, "two", true]
//*using Array.from()
let str = "abhiraj";
let arr = Array.from(str);
//console.log(arr); //output :- ['a','b','h','i','r','a','j']

//todo => Array Properties
//* length
//console.log(fruits.length); //output => 3
//*indexing
//console.log(fruits[0]); //apple
//console.log(fruits[fruits.length - 1]); //cherry

//todo => manipulating arrays

//? adding and removing elements
//*1. Push (add to end)
fruits.push("date");
//console.log(fruits); //output =>[ 'apple', 'banana', 'cherry', 'date' ]
//*2 pop (remove from end)
fruits.pop("date");
//console.log(fruits); //output => [ 'apple', 'banana', 'cherry' ]
//*3 Unshift (add to beginning)
fruits.unshift("apricot");
//console.log(fruits); //output =>[ 'apricot', 'apple', 'banana', 'cherry' ]
//*4 shift (remove from beginning)
fruits.shift();
//console.log(fruits); //output =>[ 'apple', 'banana', 'cherry' ]
//*5 splice (add/remove at specific index)
//syntax
//? => splice (start)
//? splice(start)
//? splice(start, deleteCount)
//? splice(start, deleteCount, item1)
//? splice(start, deleteCount, item1, item2)
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
//console.log(myFish.splice(2, 0, "drum"));
//output => []
//console.log(myFish);
//output  => [ 'angel', 'clown', 'drum', 'mandarin', 'sturgeon' ]
const add = myFish.splice(2, 0, "memo", "goldy");
//console.log(add);
//output => []
//console.log(myFish);
//output =>[ 'angel', 'clown', 'memo', 'goldy', 'mandarin', 'sturgeon' ]

//*6 slice (extract subarray)
console.log(myFish.slice(1, 3)); //index 1 to 3 (excluding 3)

//? Finding and Filtering

//*1.Find
//? syntax -> array.find(callback(element, index, array), thisArg);

// const numbers = [1, 2, 3, 4];
// const found = numbers.find(num => num >1);
// console.log(found); // 3

//*2.FIlter
//? syntax ->
//filter(callbackFn)
//filter(callbackFn, thisArg)
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

//* join()
//? syntax ->
//array.join([separator])
const fruits1 = ["Apple", "Banana", "Cherry"];
const result = fruits1.join(", ");
console.log(result);
// Output: "Apple, Banana, Cherry"
console.log(typeof result);
//outptut : string

//*fill()
// fill(value)
// fill(value, start)
// fill(value, start, end)
const array1 = [1, 2, 3, 4];

// Fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// Expected output: Array [1, 2, 0, 0]

// Fill with 5 from position 1
console.log(array1.fill(5, 1));
// Expected output: Array [1, 5, 5, 5]

console.log(array1.fill(6));
// Expected output: Array [6, 6, 6, 6]

//todo -- experiment with array [merging of two arrays]

let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["abhi", "raj", "veer"];
// arr1.push(arr2);
//console.log(arr1);
//output => [ 1, 2, 3, 4, 5, [ 'abhi', 'raj', 'veer' ] ]

//todo -> by concatenating "concat()"

//console.log(arr1.concat(arr2));
//output => [ 1, 2, 3, 4, 5,  'abhi', 'raj', 'veer' ]

//todo -> by spread operator (... conc)
//console.log([...arr1,...arr2])
//output => [ 1, 2, 3, 4, 5, [ 'abhi', 'raj', 'veer' ] ]

//!=> iterating Methods

//*forEach (callback)
//?Executes a function for each element.

//let a=['a','b','c']
//a.forEach(items=> console.log(items));
// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//*map(callback)
//? creates a new array by transforming elements

//console.log(a.map(x=>x*2));
//output => [NaN,NaN,Nan]

//*filter(callback)
//? Filters elements based on condition
let a1 = [1, 2, 3, 4, 4, 5];
console.log(a1.filter((x) => x == 4));
//output => [4,4]

//*reduce ()

//? the reduce() method in JavaScript is a powerful array method that allows you to iterate over an array and accumulate a single result based on the array's elements. This result could be a number, string, object, or even another array.

//? syntax => array.reduce(callback,initialValue);

//todo => Summing an Array
let number1 = [1, 2, 3, 4];
let sum = number1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); //10
//? how -> accumulator =0
//accumulator = 0+1 =1
//accumulator = 1+2 =3
//accumulator = 3+3 =6
//accumulator = 6+4 =10
let sum1 = number1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  1
);
console.log(sum1); //11
//? how -> accumulator =1
//accumulator = 1+1 =2
//accumulator = 2+2 =4
//accumulator = 4+3 =7
//accumulator = 7+4 =11

//todo -> counting occurence
// let studentName = ["abhiraj", "raj", "aman", "aman", "raj", "abhiraj"];
// let countName = studentName.reduce((acc, name) => {
//   acc[name] = (acc[name] || 0) + 1;
//   return acc;
// }, {});

// console.log(countName);


//todo ->finding maximum value

// let numbers3=[5,19,23,323,432]
// let max = numbers3.reduce((acc,currentValue)=>
// Math.max(acc,currentValue));
// console.log(max);
//output => 432


//!more to explore like
//? some() => returns true if any element matches condtion.
//? every()=> returns true if all element match condition.
//?reverse()=> reverse the array.
//? toString() => converts array into string.
//? isArray() => check if value is an array.
