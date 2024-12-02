//! ARROW FUNCTIONS
//?Arrow functions in JavaScript, introduced in ES6, are a concise way to write functions. They have a unique syntax and behavior, making them different from traditional function declarations and expressions. Here's an in-depth look at arrow functions:

//!SYNTAX
// const function_name = (parameters) => {
// Function body
// }

//? EXAMPLE ==>
// Traditional function
function traditionalFunction(a, b) {
  return a + b;
}
console.log("traditional function = ", traditionalFunction(3, 4));
//Arrow function
const arrowFunction = (a, b) => a + b;
console.log("Arrow function = ", arrowFunction(5, 4));

//todo => variant og arrow functions

//*1. Single-line body (implicit return)

const multi = (a, b) => a * b; // Returns a + b
console.log(multi(4, 5));

//*2.BLock bosy (explicit return required)

let divide = (a, b) => {
  let divide = a / b;
  return divide;
};
console.log(divide(25, 5));

//todo =>> this and arrow functions

let user = {
  username: "abhiraj",
  age: 19,

  welcomeMessage: function () {
    console.log(`${this.username} ,welcome to website`);
    console.log(this);
  },
};
//*user.welcomeMessage();
// output => abhiraj ,welcome to website
// {
//   username: 'abhiraj',
//   age: 19,
//   welcomeMessage: [Function: welcomeMessage]
// }
//*user.username = "sam";

//*user.welcomeMessage();
//output => sam ,welcome to website
// {
//   username: 'sam',
//   age: 19,
//   welcomeMessage: [Function: welcomeMessage]
// }
//* console.log(this);
// output => {}

//todo => what if "this" under the function

// function student() {
//   let username ="abhi"
//   console.log(this.username);

// }

// student()
// output => undefined
//? conclusion => in traditional function used under the object with "this"

//todo => by arrow function
let user1 = () => {
  let username = "abhi";
  console.log(this.username);
  //output => undefined
  console.log(this);
  //output => {}
};
//user1();
// output => undefined
 


