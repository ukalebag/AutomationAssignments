//Conditional Statements line of code along with conditions
let x:number=10;
let y:number=20;
let z:any="10";

if(x > y){
    console.log("Equality operator: "+(x==z)); //true compares only values
    console.log("Strict equality operator: "+(x===z)); //false)(comparison of both values and type)
    console.log("Inequality operator: "+(x!=y));//true(compares values)
    console.log("Greater than operator: "+(x>y));//false
    console.log("Less than operator: "+(x<y)); //true
    console.log("Greater than or equal to operator: "+(x>=y)); //false
    console.log("Less than or euqal to operator: "+(x<=y)); //true
}

//there are mainly two important conditional statements we have in typescript
//1. if-else will be used when we don't know the result of the confitoiin before itself
//2. switch-case used to choose one option among multiple
//1. if-else
/*if(condition1){
    if(condition){
    }else if(condition2){
    }else{
    }
}else if(condition2){
    if(condition){
    }else if(condition){
    }else{
    }
}else if(condition3){
    if (condition){
    }else if (condition){
    }else{
    }
}
else{

    default block of code to execute when all the above conditions are false
}

*/
//example of if esle program
let percentage:number=92;

if(percentage >=90){
    console.log("Grade A");
    if(percentage>=95){
        console.log("Hey buddy, you are eligible for gold medal.Congratulations!!")
    }else{
        console.log("Hey buddy, you are eligible for silver medal.Congratulations!!")
    }
}
else if(percentage>=80){
    console.log("Grade B");
}
else if(percentage>=70){
    console.log("Grade c");
}
else if(percentage>=60){
    console.log("Grade D");
}
else {
    console.log("Grade F");
}

// switch case Syntax
//switch(expression){
//case value1:
// block of code to be executed when the expression is equal to value
//break;
// case value2:
//block of code to be executed when the expression is equal to value2
//break; 
// case value3:
//block of code to be executed when the expression is equal to value3
//break; 
// default;
//block of code to be executed when the expression doesn't match any of cases
//}

// Switch case example
let env:string="qa";
//let env:string="uat" Please provide the correct environment to execute tests
switch(env){
    case "development":
        console.log("Execute the tests in development env with dev.amazon.com");
        break;//break statement is used to exit switch-case block after executing code for the  matched case.
    case "qa":
        console.log("Execute the tests in qa env with qa.amazon.com");
        break;
    case "prod":
        console.log("Execute the tests in production env with amazon.com");
        break;
    default:
        console.log("Please provide the correct environment to execute tests");

}