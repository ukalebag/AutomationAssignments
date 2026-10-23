// Variable Declaration in JavaScript
// All about declaring the nature of data while storing
// There are three ways to declare variables in JavaScript:
// 1. var
// 2. let
// 3. const
// These three different declaration will differ mainly based on four important parameters:
// Initialization
// reassignment
// Scope
// Re-declaration
// Initialization: It is the process of assigning a value to a variable at the time of declaration.
const a = 10; // variable a is initialized with value 10
let b; // variable b is declared but not initialized
var c; // variable c is declared but not initialized
// Reassignment: It is the process of assigning a new value to a variable after it has been declared and initialized.
//a= 20 we cannot change value of variable after it has been declared
b = 20; // variable b is reassigned with value 20
c = 30; // variable c is reassigned with value 30
// Re-declaration: It is the process of declaring a variable with the same name more than once in the same scope.
//const a = Poonam; //  cannot re-declared if using a const declaration
// let b = poonam; // cannot re-declared if using a let declaration
//var c = poonam; // can always re-declared is using var as ur declaration
//console.log(c);

// Scope: It is the accessibility of a variable in different parts of the code. There are two types of scope in JavaScript:
// 1. Global Scope: A variable declared outside of any function or block is said to have global scope. It can be accessed from anywhere in the code.
// 2. Local Scope: A variable declared inside a function or block is said to have local scope. It can only be accessed within that function or block.   
{
    //local scope
    const x = 10;
    let y = 20;
    var z = 30;
    // console.log(x);
    //console.log(y);
    //console.log(z);
}
//console.log(x); const is block scoped, so it cannot be accessed outside the block
//console.log(y); let is block scoped, so it cannot be accessed outside the block
console.log(z); // var is function scoped, so it can be accessed outside the block    