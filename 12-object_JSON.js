//! OBJECT DESTRUCTURING IN JAVASCRIPT 

//? Object destructuring is a convenient way to extract values from objects and assign them to variables in a clean and concise manner. This is especially useful when working with objects with multiple properties.

//? SYNTAX
// const {prop1,prop2} = object;

//? EXAMPLE ==>
  // const user = {
  //   name: "Abhiraj",
  //   age: 20,
  //   country: "India",
  // };
  
  // const { name, age } = user;
  
  // console.log(name); // "Abhiraj"
  // console.log(age);  // 20
  
//todo ==> Advancesd Features
//* 1.Rename variables
// const { name: userName, age: userAge } = user;

// console.log(userName); // "Abhiraj"
// console.log(userAge);  // 20

//* 2. Default Values

// const{state = "INDORE"}=user;
// console.log(state); //"INDORE"

//* 3. Nested destructuring 

// const user = {
//   name: "Abhiraj",
//   address: {
//     city: "Mumbai",
//     zip: "400001",
//   },
// };

// const { address: { city, zip } } = user;

// console.log(city); // "Mumbai"
// console.log(zip);  // "400001"

//*4 Rest Operator
//?Use the rest operator to gather remaining properties into a new object
const user = {
  name: "Abhiraj",
  age: 20,
  country: "India",
};

const { name, ...rest } = user;

console.log(name); // "Abhiraj"
console.log(rest); // { age: 20, country: "India" }

