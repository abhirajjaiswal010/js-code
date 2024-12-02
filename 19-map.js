//!==> MAP
//?==> The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

const map = new Map();
map.set("IN", "india");
map.set("USA", "united states of America");
map.set("UK", "united kingdom");
//console.log(map);

for (const key of map) {
  //console.log(key);
}
//output ==>
//[ 'IN', 'india' ]
// [ 'USA', 'united states of America' ]
// [ 'UK', 'united kingdom' ]
for (const [key, value] of map) {
  //console.log(key, ":-", value);
}
//output ==>
//IN :- india
// USA :- united states of America
// UK :- united kingdom

const myObject = {
  js: "javascript",
  python: "python",
  java: "java",
  cpp: "c++",
};
for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["python", "java", "cpp"];
for (const key in programming) {
  //console.log(key);
} //? in array key are number but in object keys are anything
const map1 = new Map();
map.set("IN", "india");
map.set("USA", "united states of America");
map.set("UK", "united kingdom");
