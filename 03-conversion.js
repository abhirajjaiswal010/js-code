//todo: type conversion in JS
// *Type conversion (or typecasting) means transfer of data from one data type to another.
//examples:
let a = "33";
console.log(typeof a); //string

let valueInNumber = Number(a); //string into  numbeer by use of "Number()."
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33

//! "alert" -> Nan - not a number

let b = "abc10";
console.log(typeof b); //string

let valueInNumber1 = Number(b); //string into number
console.log(typeof valueInNumber1); //Number
console.log(valueInNumber1); //NaN


//*----------------------------------------------------------------
//! String to Number
// Convert a string to a number using:

//? Number() Function:
let str = "42";
let num = Number(str);
console.log(typeof num);
 // 42 number

 //? parseInt() or parseFloat() Functions:
 let str1 = "42.56";
let intNum = parseInt(str1); // 42
let floatNum = parseFloat(str1); // 42.56

//*-----------------------------------------------------------------

//! Number to string

//? string() function :
let num1 = 42;
let str2 = String(num1); // "42"
console.log(typeof str2); //string 

//? toString() function :

let num2 = 42;
let str3 = num2.toString(); // "42"
console.log(typeof str3);

//? by use of "template literals"

let num4=42
let str4 =`${num}`
console.log(typeof str4); 

//*-----------------------------------------------------------------

//! Boolean to string
//? by use of string()
let bool = true;
let str5 = String(bool); // "true"
console.log(typeof str5); //string

//? by use of toString()

let bool1=false
let str6 = bool.toString(); "false"
console.log(typeof str6); //string

//*-----------------------------------------------------------------
//! string to boolean

//? by use of Boolean()
// let str7 = "abhiraj"
// let bool2 = Boolean(str7)
// console.log(typeof bool2);
// console.log(bool2) //*output -> true when string have value
//? by use of "!!"
// let str7 = ""
// let bool2 = !!str7
// console.log(typeof bool2);
// console.log(bool2) //*output -> false when string is empty

//*-----------------------------------------------------------------

//!number to boolean 

//1 => true ;
//0 => false;
//"" => false;
//"hitesh" => true;

//! *****THE END******














