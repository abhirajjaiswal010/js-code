//!OBJECT [important to learn]
//todo -> creating the objects

//* by use of "object literals"
// let person = {
//   name: "John",
//   "full name": "Jonny",
//   age: 30,
//   city: "New York",
//   email: "john@example.com",
// };

//*by using 'new Object()'

let person2 = new Object();
person2.name = "Jane";
person2.age = 25;
person2.city = "Los Angeles";

//todo -> accessing the object

//* by using dot notation
//console.log(person.name); //john
//console.log(person.age);//30
//console.log(person.email); //john@example.com
//console.log(person.'email'); //! give error
//console.log(person.full name); //! give error

//*by using bracket notation
//console.log(person["age"]); //30
//console.log(person["email"]); //john@example.com
//console.log(person["full name"]); //jonny

//todo-> using " symbol in  objects "

let sym = Symbol("id");
let person = {
  name: "John",
  age: 30,
  city: "New York",
  email: "john@example.com",
  //? if you want to add a symbol in objects then you must use [] this bracket notation
  [sym]: 121331,
};

//console.log(person[sym]); //121331

//todo -> object.freeze()
//? freeze is use for freezing the data in object that cannot be manipulated.

//before -> using of freeze
person.email = "abhirajjaiswal@gmail.com";
//console.log(person.email); //output -> abhirajjaiswal@gmail.com

//after -> using of freeze

//* Object.freeze(person);
person.email = "ajthelastknight@gmail.com";
//console.log(person.email); //output -> abhirajjaiswal@gmail.com

//todo -> manipulate object by functions
person.country = function () {
  console.log("INDIA");
};
//onsole.log(person.country());
//output -> INDIA
//undefined
//person.country();
// output -> INDIA

//adding greetings to person name
person.greets = function () {
  console.log(`Welcome to our space Mr/Mrs ${this.name}`);
};

//console.log(person.greets);
//output -> [Function (anonymous)]
//? if we don't put () this then function is created but it will not display
//console.log(person.greets());
//output ->Welcome to our space Mr/Mrs John
//undefined
//person.greets();
//output -> Welcome to our space Mr/Mrs John

//todo -> nested object
// let auth ={
//   username: "admin",
//   password: "password123",
//   isAdmin: true,
//   role: {
//     name: "admin",
//     level: 100,
//   },
// }

//console.log(auth.role);
//-->output ->{ name: 'admin', level: 100 }
//console.log(auth.role.level);
//-->output -> 100

//todo -> checking property existence
//* using 'in' operator
//console.log("password" in auth) //true
//console.log("name" in auth) //false

//* using "hasOwnProperty()"

let myObj = {};
myObj.prop1 = "abhiraj";
//console.log(myObj.hasOwnProperty('prop1')); //true
//console.log(myObj.hasOwnProperty('prop2')); //false

//todo --> iterates (repeat) over all enumerable properties

//* for .. in
//? example -->
let object = {
  a: 1,
  b: 2,
  c: 3,
};

for (let prop in object) {
  ///console.log(`${prop}:${object[prop]}`);
}
//--> output
//a:1
//b:2
//c:3

//? example
// let car = {
//   brand: "mercedes",
//   model: "x-class",
//   year: 2024,
// };
// for (let prop in car) {
//   //console.log (`${prop}:${car[prop]}`);
// }
//output -->
// brand:mercedes
// model:x-class
// year:2024

//*Object.keys()
//? return an array of keys
//console.log(Object.keys(car));
//output ---> [ 'brand', 'model', 'year' ]
//*object.value()
//? return an array of values
//console.log(Object.values(car));
//output --> [ 'mercedes', 'x-class', 2024 ]
//*Object.entries()
//? returns an array of key-value pairs
//console.log(Object.entries(car));
//output --> [ [ 'brand', 'mercedes' ], [ 'model', 'x-class' ], [ 'year', 2024 ] ]

//todo --> Object methods

//*Object.freeze()
//? prevent adding ,modifyinh or deleting properties
// Object.freeze(car);
// car.brand = "Audi"; // Does nothing
// console.log(car);

//*Object.seal()
//? prevent adding or deleting properties but allows modifications
//Object.seal(car);
//delete car.year; // Does nothing
//car.brand = "Audi"; // Works
//console.log(car);

//*Object.assign()
//? copies properties form one or more objects into a target object
//! syntax --> Object,assign(target , source)
let obj1 = {a: 2,b: 3,c: 4,};
let obj2 = {d: 5,e: 6,};
Object.assign(obj1, obj2);
console.log(obj1);
// --> outptut => { a: 2, b: 3, c: 4, d: 5, e: 6 }

//*Object.create ()
//? creates a new object with a specified prototype

let car = {
  brand: "mercedes",
  model: "x-class",
  year: 2024,
};

let prototype = {color: "black"}
car = Object.create(prototype)
console.log(car.color);
