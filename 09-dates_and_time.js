//*Current date and time
let now = new Date();
// console.log(typeof now); // Output: object

// console.log(now); // Output:2024-11-16T12:18:43.240Z

// console.log(now.toString()); //!output :Sat Nov 16 2024 17:53:19 GMT+0530 (India Standard Time)

// console.log(now.toDateString()); //!output :Sat Nov 16 2024

// console.log(now.toISOString()); //output :2024-11-16T12:24:08.810Z

// console.log(now.toJSON()); //output :2024-11-16T12:24:08.810Z

// console.log(now.toLocaleDateString()); //!output :11/16/2024

// console.log(now.toLocaleString()); //!output :11/16/2024, 5:56:03 PM

// console.log(now.toLocaleTimeString()); //output :5:56:03 PM

// console.log(now.toTimeString()); //output :17:57:37 GMT+0530 (India Standard Time)

// console.log(now.toUTCString()); //output :Sat, 16 Nov 2024 12:29:24 GMT


//* specific date creation

let myDate = new Date(2023,0,23)
//console.log(myDate.toDateString()); //output => Mon Jan 23 2023

let myDate1 = new Date (2024,0,25,4,3)
//console.log(myDate1.toLocaleString()); //output =>1/25/2024, 4:03:00 AM
let myDate2 = new Date ("2024-01-10")
//console.log(myDate2.toLocaleString()); //output =>1/10/2024, 5:30:00 AM

let myDate3 = new Date ("01-10-2024")
//console.log(myDate3.toLocaleString()); //output => 1/10/2024, 12:00:00 AM


//* specific date and time formats
const specificDateTime = new Date(2024, 10, 16, 10, 30, 15); 
//todo => (Year, Month, Day, Hours, Minutes, Seconds)
//console.log(specificDateTime.toString());

//* creating timestamp

let myTimeStamp = Date.now()
//console.log(myTimeStamp); //output => 1731761453877
//console.log(specificDateTime.getTime()); //output => 1731733215000
//console.log(Math.floor(Date.now()/1000)); //output =>1731761650

let newDate = new Date()
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());
// console.log(newDate.getMonth());
// console.log(newDate.getSeconds());
// console.log(newDate.getTime());




