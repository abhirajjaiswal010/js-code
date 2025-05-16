//& MAP function
//*example

const arr = [5, 2, 4, 3];

function double(x) {
  return x * 3;
}
function binary(x) {
  return x.toString(2);
}
//? format of MAP 1
// const output = arr.map(binary);
//? format of MAP 2
//  const output = arr.map(function hexa(x){
//   return x.toString(2)
//  })
//? format of MAP 3
// const output = arr.map((x)=>{
//   return x+1 //return and {} optional when statemetn is oneline
// })
//? format of MAP 4
// const output = arr.map(
//   (x) => x + 1 //return and {} optional when statemetn is oneline
// );
// console.log(output);

//&& filter function

const f1 = [2, 3, 4, 242, 12, 3];
function isodd(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 == 0;
}
// const output = f1.filter(isEven);
// const output =f1.filter((x)=> x>4)
// console.log(output);

//& reduce function

const r1 = [3, 34, 43, 2, 1, 2];
//syntax
/* array.reduce((accumulator, currentValue) => {
  return updatedAccumulator;
}, initialValue);
 */
//^ accumulator → Stores the running total (or result).

//^ currentValue → The current element of the array.

//^ initialValue → The starting value for the accumulator (optional but recommended)

//? for example sum
/* let output = r1.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0); */
//console.log(output);
//? for example of find max
/* let output1 = r1.reduce(function (acc, curr) {
  if (acc < curr) acc = curr;
  return acc;
}, 0);
console.log(output1); */


//? more examples
const user =[
  { name: 'John', age: 27 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 28 },
  { name: 'Charlie', age: 27 },
  { name: 'David', age: 27 }
]
//task1 - list of name
const output = user.map(x=>x.name)
console.table(output);
//task2 - person with same age

const output1 = user.reduce(function(acc,curr){
  if(acc[curr.age])
  {
acc[curr.age]=++acc[curr.age];
  }
  else{
    acc[curr.age]=1;
  }
return acc;
},{})
console.log(output1)
