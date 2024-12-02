//* stack => primitive data types use
//* heap => non primitive data types

//! stack for primitve types
//fixed size
//faster access
//automatic cleanup
//? it will allow only on "number,boolean,undefined and function calls "

//todo : example of stack
let myName ="abhirajjaiswal"
let anotherName =myName
anotherName="AJ"

console.log(myName); //abhirajjaiswal
console.log(anotherName) //AJ


//! heap for non primitive types
//used for object types
//larger,more flexible 
//dynamic size {it can  grow or shrink}
//slower Access

//todo : example of heap
let userOne ={
  name:"abhiraj",
  age:19
}

let userTwo = userOne
userTwo.name= "AJ_lastknight"
console.log(userOne.name); //it should be "abhiraj" but output is AJ_lastknight because of objects and arrays are stored in the heap memory, and variables that hold objects or arrays store references to these locations in the heap. This is why changes made to one object are reflected in another if they both reference the same object.
console.log(userTwo.name);







