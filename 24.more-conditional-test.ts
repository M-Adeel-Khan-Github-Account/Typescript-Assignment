// Equality and Test 1
console.log("Equality Test with strings: ", "Mango" === "Mango");
// and inEquality Test 2
console.log("inEquality Test with strings: ", ("Mango" as string) != "Apple");

// Test using the Lower case function
console.log("Lower Case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality and: 1
console.log("Equality Test with numbers: ", 26 === 26);
// involving inequality: 2
console.log("inEquality Test with numbers: ", (26 as number) != 25);

// greater than and less than
console.log("Greater than test: ", 10 > 5);
console.log("less than test: ", 5 < 10);

// greater than or equal to 
console.log("Greater than or equal to test: ", 10 >= 10);
// less than or equal to
console.log("less than or equal to :", 5 <= 10);

// Test using "and" & "or" operators
console.log("and operator test: ", 5===5 && 10>5);
console.log("or operator test: ", 2+2==4 || 3+1==4 );

// Test whether an item is in a array
const fruits :string[] = ['Watermelon', 'Banana', 'Peach'];
console.log('Test "Watermelon" in the array: ', fruits.includes("Watermelon"));

// Test wether an item is not in a array
console.log('Testing "Apple" is not in array: ' , !fruits.includes('Apple'));
