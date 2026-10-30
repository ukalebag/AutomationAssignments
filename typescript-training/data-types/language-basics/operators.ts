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
//--a pre decrement decrease value & excute line, a-- post decrement execute line with old value then decrease by 1
console.log(--a);
console.log(a);
console.log(a--);
console.log(a);


//2. Assignment operatots used to assign a value to variable(=,+=,-=,/=,%=)
//=simple assignments operator(assigns value on the right to variable on left)
//+=addition assignment operators(adds value on the right to variable on left & assigns result to variable on left)(x+=10)


let c:number= 10;
console.log("simple assignment:" ,c);//c=10
c+=10; //c= c+10;
console.log("Addition assignment",c);//c=20
c-=5; //c=c-5;
console.log("subsraction assignment",c);//c=15
c*=2; // c=c*2;
console.log("multiplication assignment",c);//c=30
c/=3; //c=c/3
console.log("division assignment",c);//c=10
c%=3;// c=c%3
console.log("Modulus assignment",c);//c=1



//3. Comparison operators used to compare 2 diff values(==,===,!=,<,>,<=,>=)
//==Equality operator (compares value of 2 operands returns true if they are equal,false othrewise)
//===strict equality operator compare both values & type of 2 operands retruns ture if they are equal false othrewise)
//!= Inequality operator (compares value of 2 operands, returns true if they are not equal,false otherwise)
//> Greater returns true if letft operand is greater than reight operand, false otherwise)
//< less than operatior (returns true is left is less than right operand, false otherwise)
//>= greater than equal to operator (returns true id left operand is greater than or equal to right operand, false otherwise)
//<= less than equal to operator(returns true id left operand is less than or equal to right operand, false otherwise)
let x:number=10;
let y:number=20;
let z:string="10";
console.log("Equality operator:",(x==z)); //true compares on;y values
console.log("Strict equality operator:"+(x===z)); //false compares both values & type
//8:44
let n:number=10;
let m:number=20;
let o:any=10;
console.log("Equality operator:",(n==o)); //true compares on;y values
console.log("Strict equality operator:"+(n===o)); //false compares both values & type

//4. logical operators used to bluild logics by combing multiple condition(&&,||,!)
//&& Logical AND operator(returns true both operands are true, false otherwise)
//|| Logical OR operator(return true if at least one operand is true, false otherwise)
//! Logical Not operator(returns true if operand is false, and false if operand is true)
let i:number=10;
let j:number=20;
let k:number=30;
console.log("Logical AND operand: "+(i<j&&j<k));//true and true = true
console.log("Logical OR operand: "+(i<j||j>k));//true or true = true
console.log("Logical NOT operand: "+!(i<j));//not true = false

//5. Ternary operator used to perform conditional operations(?)
//Syntax condition ? expression 1: expression2
//If condition is true, expression1 is evaluated and returned; otherwise expression2 is evaluated and returned
let age:number=18;
let eligibility:string=age>=18? "Eligible to vote" : "Not eligible to vote";
console.log("Ternary operator: "+ eligibility);//Eligible to vote

let num1:number=5;
let num2:number=10;
let max:number=num1>num2 ? num1:num2;
console.log("Maximum number: "+ max);//10

