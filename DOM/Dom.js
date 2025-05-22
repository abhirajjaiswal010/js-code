//? 4 pillars in DOM
// 1.selection of an element
// 2.changing HTML
// 3.changing CSS
// 4.EventListener

//! 1. selection of an element
// var a = document.querySelector("h1"); //forclass-> .tagname //forID-> #tagname
// console.log(a);

//! 2. changing Html
// a.innerHTML = "hi World";

//! 3. changing css
// a.style.color="yellow"
// a.style.backgroundColor="blue"

//! eventListener
// const changeEvent=()=>
// {
// alert("bhag ")
// }
// a.addEventListener("mouseover",changeEvent)

//^ bulb program
let bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");
let isOn=false;

btn.addEventListener("click", function () {
  if(isOn){
    bulb.style.backgroundColor = "black";
  bulb.style.boxShadow="none"
  btn.innerHTML="OFF"
  isOn=false
  }
  else{
    bulb.style.backgroundColor = "yellow";
  bulb.style.boxShadow="0px 0px 50px 20px yellow"
  btn.innerHTML="ON"
  isOn=true
  }
});
