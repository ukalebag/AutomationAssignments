// Operators: special characters used in programming language to perform operations

// 5 diff type of operators available in typescript
//1. arithmetic opeartors operators used in mathematical operator(+.-,/,%,++,--)
//2. Assignment operatots used to assign a value to variable(=,+=,-=,/=,%=)
//3. Comparison operators used to compare 2 diff values(==,===,!=,<,>,<=,>=)
//4. logical operators used to bluild logics by combing multiple condition(&&,||,!)
//5 ternary operator used to perform conditional operation(?)

//1. arithmetic opeartors operators used in mathematical operator(+.-,/,%,++,--)
//+ addition 
//- subtraction 
//* Multiplication
/// division
//% modulus reminder
//++ increment (adds1 to variable)
//-- decrement (substracts 1 to variable)
let a:number =10;
let b:number= 20;
console.log("Addition:",+(a+b));
console.log("Subtraction",+(a-b));
console.log("Multiplication:"+(a*b));
console.log("Division:"+(a/b));
console.log("Modulus:"+(a%b));

//++a pre increment (increase value first & execute) a++ post increment execute the ling with old value then increase the value by1
console.log(++a);
console.log(a);
console.log(b++);
console.log(b);
//--a pre decrement decrease value
