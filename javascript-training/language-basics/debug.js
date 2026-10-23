//Debugging in js
//Debugging is the process of identifying and fixing errors or bugs in your code. 
//During debugging process, we are going to manually control and run the program line by line to find the error in the code.

console.log("Executing line 1");
console.log("Executing line 2");
console.log("Executing line 3");
sumOfNumbers(5, 10);
console.log("Executing line 4");
console.log("Executing line 5");
console.log("Executing line 6");
console.log("Executing line 7");
console.log("Executing line 8");
console.log("Executing line 9");
console.log("Executing line 10");


//logic of the function sumOfNumbers is defined after the function call, which is causing the error.
function sumOfNumbers(a, b) {
    c = a + b;
    console.log("Sum is: " + c);
}

//VS code shortcuts

//1. format document: Shift + Alt + F
//2. open terminal: Ctrl + `
//3. go to specific line: Ctrl + G
//4. autosave: Ctrl + Shift + S
//5. open and close file. open file: Ctrl + O, close file: Ctrl + W
//6. remane js file f2