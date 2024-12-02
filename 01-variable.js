//!notes
//*what is variables
// A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.

const accountId = 1455546
let accountemail = "abhirajjaiswal500@gmail.com"
var accountpass = "12345"
accountCity = "jaipur" //without variable but this is not true way
let accountstyle
// accountId=2 //! not allowed give error 
accountemail ="asbdiubd"
accountpass="12113131"
accountCity="indore"

//todo -- for normal print
console.log(accountId);
//todo -- for tabular print 
console.table([accountId,accountemail,accountpass,accountCity,accountstyle])

//* prefer not use "var" because of issue in block scope and functional code



let a = 3;
a="hello";
console.log(a);

