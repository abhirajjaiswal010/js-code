// console.log("1" + 2 + 4); //124
// console.log(1 + 2 + "5"); //35
// console.log(+true); //1
// console.log(+""); //0

//! binary operator
// operand1 operator operand2
//e.g -> 3+4

//!unary operator
//operator operand OR //operand operator
//e.g -> x++ or ++x

//!assignment operator

// Assignment => x = f()
// Addition assignment => x = x + f(), shorthand: x += f()
// Subtraction assignment => x = x - f(), shorthand: x -= f()
// Multiplication assignment => x = x * f(), shorthand: x *= f()
// Division assignment => x = x / f(), shorthand: x /= f()
// Remainder assignment => x = x % f(), shorthand: x %= f()
// Exponentiation assignment => x = x ** f(), shorthand: x **= f()
// Left shift assignment => x = x << f(), shorthand: x <<= f()
// Right shift assignment => x = x >> f(), shorthand: x >>= f()
// Unsigned right shift assignment => x = x >>> f(), shorthand: x >>>= f()
// Bitwise AND assignment => x = x & f(), shorthand: x &= f()
// Bitwise XOR assignment => x = x ^ f(), shorthand: x ^= f()
// Bitwise OR assignment => x = x | f(), shorthand: x |= f()
// Logical AND assignment => x && (x = f()), shorthand: x &&= f()
// Logical OR assignment => x || (x = f()), shorthand: x ||= f()
// Nullish coalescing assignment => x ?? (x = f()), shorthand: x ??= f()

//! comparison operators
//* Equal (==) => Returns true if the operands are equal
// Examples: 3 == var1, "3" == var1, 3 == '3'

//* Not equal (!=) => Returns true if the operands are not equal
// Examples: var1 != 4, var2 != "3"

//* Strict equal (===) => Returns true if the operands are equal and of the same type
// Examples: 3 === var1

//* Strict not equal (!==) => Returns true if the operands are of the same type but not equal, or are of different types
// Examples: var1 !== "3", 3 !== '3'

//* Greater than (>) => Returns true if the left operand is greater than the right operand
// Examples: var2 > var1, "12" > 2

//* Greater than or equal (>=) => Returns true if the left operand is greater than or equal to the right operand
// Examples: var2 >= var1, var1 >= 3

//* Less than (<) => Returns true if the left operand is less than the right operand
// Examples: var1 < var2, "2" < 12

//* Less than or equal (<=) => Returns true if the left operand is less than or equal to the right operand
// Examples: var1 <= var2, var2 <= 5


//! arihmetic operator
//* Remainder (%) => Binary operator. Returns the integer remainder of dividing two operands
// Example: 12 % 5 returns 2

//* Increment (++) => Unary operator. Adds one to its operand
// Example: 
// If x is 3, ++x sets x to 4 and returns 4
// If x is 3, x++ returns 3 and sets x to 4 afterward

//* Decrement (--) => Unary operator. Subtracts one from its operand
// Example: 
// If x is 3, --x sets x to 2 and returns 2
// If x is 3, x-- returns 3 and sets x to 2 afterward

//* Unary negation (-) => Unary operator. Returns the negation of its operand
// Example: If x is 3, -x returns -3

//* Unary plus (+) => Unary operator. Attempts to convert the operand to a number if it is not already
// Examples:
// +"3" returns 3
// +true returns 1

//* Exponentiation operator (**) => Calculates the base to the exponent power (base^exponent)
// Examples:
// 2 ** 3 returns 8
// 10 ** -1 returns 0.1

//!bitwise operator

//* Bitwise AND (&) => Returns a one in each bit position where both operands have ones
// Example: 
// let a = 5; // binary: 0101
// let b = 3; // binary: 0011
// console.log(a & b); // 1 (binary: 0001)

//* Bitwise OR (|) => Returns a one in each bit position where either operand has a one
// Example:
// let c = 5; // binary: 0101
// let d = 3; // binary: 0011
// console.log(c | d); // 7 (binary: 0111)

//* Bitwise XOR (^) => Returns a one in each bit position where the corresponding bits are different
// Example:
// let e = 5; // binary: 0101
// let f = 3; // binary: 0011
// console.log(e ^ f); // 6 (binary: 0110)

//* Bitwise NOT (~) => Inverts the bits of its operand
// Example:
// let g = 5; // binary: 0101
// console.log(~g); // -6 (binary: 1010, because it flips all bits, including the sign bit)

//* Left shift (<<) => Shifts `a` in binary representation `b` bits to the left, shifting in zeros from the right
// Example:
// let h = 3; // binary: 0011
// let i = 2; // shift by 2
// console.log(h << i); // 12 (binary: 1100)

//* Sign-propagating right shift (>>) => Shifts `a` in binary representation `b` bits to the right, discarding bits shifted off
// Example:
// let j = -8; // binary: 11111111111111111111111111111000
// let k = 2; // shift by 2
// console.log(j >> k); // -2 (binary: 11111111111111111111111111111110)

//* Zero-fill right shift (>>>) => Shifts `a` in binary representation `b` bits to the right, shifting in zeros from the left
// Example:
// let l = -8; // binary: 11111111111111111111111111111000
// let m = 2; // shift by 2
// console.log(l >>> m); // 1073741822 (binary: 00111111111111111111111111111110)


//!logical operator
//* Logical AND (&&) => Returns expr1 if it can be converted to false; otherwise, returns expr2
// Example: 
// let a1 = true;
// let b1 = false;
// console.log(a1 && b1); // false (because b is false)

// let x1 = 5;
// let y1 = 10;
// console.log(x1 > 3 && y1 < 15); // true (both conditions are true)

//* Logical OR (||) => Returns expr1 if it can be converted to true; otherwise, returns expr2
// Example:
// let p1 = false;
// let q1 = true;
// console.log(p1 || q1); // true (because q is true)

// let m1 = 1;
// let n1 = 0;
// console.log(m1 || n1); // 1 (returns the first truthy value, which is m)

//* Nullish coalescing operator (??) => Returns expr1 if it is neither null nor undefined; otherwise, returns expr2
// Example:
// let user = null;
// let defaultName = "Guest";
// console.log(user ?? defaultName); // "Guest" (because user is null)

// let name = "Abhiraj";
// let noName = undefined;
// console.log(name ?? "Anonymous"); // "Abhiraj" (because name is not null or undefined)

//* Logical NOT (!) => Returns false if its single operand can be converted to true; otherwise, returns true
// Example:
// let isActive = false;
// console.log(!isActive); // true (because isActive is false)

// let isOnline = true;
// console.log(!isOnline); // false (because isOnline is true)


//todo
console.log(null>0);
console.log(null>=0)
console.log(null==0);

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);





