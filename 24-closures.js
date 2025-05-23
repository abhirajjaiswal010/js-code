//! Lexical Scoping
//? "Lexical scope mein tumhare variables wahi available hote hain jahan tumne unko likha hota hai — aur uske andar ke blocks mein bhi. Bahar ke variables andar se mil jaate hain, lekin andar ke bahar se nahi jaate."

function Outer() {
  let name = "abhiraj";
  function Inner() {
    console.log(name);
  }
  Inner();
}
Outer();

//! closure
//?  ✅ Definition:
// A closure is when a function remembers its lexical scope, even after the outer function has finished execution.
//? 🧠 Hinglish Explanation:
// "Closure ek aisa function hai jo apne surrounding variables ko yaad rakhta hai, chahe original function kab ka execute ho chuka ho."

function closure_outer() {
  let name = "abhiraj1";
  function closure_inner() {
    console.log(name);
  }
  return closure_inner;
}

const myfxn = closure_outer();
myfxn();
myfxn();

//& real world analogy
let orange = document.querySelector("#orange");
let green = document.querySelector("#green");
// orange.addEventListener("click", () => {
//   document.body.style.backgroundColor = "orange";
// });
// green.addEventListener("click", () => {
//   document.body.style.backgroundColor = "green";
// });

// function clickHandler(color) {
//   // document.body.style.backgroundColor = `${color}`;
//   return function () {
//     document.body.style.backgroundColor = `${color}`;
//   };
// }

// document.getElementById("orange").onclick = clickHandler("orange");
// document.getElementById("green").onclick = clickHandler("green");

//& mini project on closure tha is button counter
function CreateClickCounter(){
  let count =0
  return function(){
    count++;
    document.getElementById('count').innerText=count
  }
}
let btn = document.querySelector('button')
const handleClick=CreateClickCounter();

btn.addEventListener("click",handleClick
  
)
