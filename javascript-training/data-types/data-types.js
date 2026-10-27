//Data types in javascript
//1. Primitive data types(immutable data types cannot change the original value)
//imutable 
let a= 10;
a+10;
console.log(a); //10    

//2. Non-primitive data types(mutable data types modify the original value)
//mutable
let obj = {
    "name": "Poonam",
    "id": 125
};
obj.age=31;
console.log(obj); //{ name: 'Poonam', id: 125, age: 31 }

// Data types in javascript
//1. Primitive data types(immutable data types cannot change the original value)
//number, string, boolean, null, undefined, symbol
//Number data type to store numers with decimal and without decimal, withooout quotes)
let num1 = 10; //number without decimal
let num2 = 10.5; //number with decimal
console.log(typeof num1); //10
console.log(typeof num2); //10.5

//2. String data type to store text values with quotes(single/double/backtick(dynamic values))
let empName = "Poonam";
let location = 'Pune';
let company = `Infosys`;
console.log(typeof empName); //string
console.log(typeof location); //string
console.log(typeof company); //string
console.log("Employee name is " +empName+ " Emp location is " +location); //Employee name is Poonam and Emp location is Pune
console.log(`Employee name is ${empName} and Emp location is ${location}`); //employee name is Poonam and Emp location is Pune

//3 . Boolean data type to store true or false values
let x=10;
let y=20;
let z =x>y;
console.log(z); //false
console.log(typeof z); //boolean


/*let isEmp = true;
let isManager = false;
console.log(typeof isEmp); //boolean
console.log(typeof isManager); //boolean    
*/

//4. Undefined data type to store variable which is not assigned any value
let empId;
console.log(empId); //undefined
//console.log(typeof empId); //undefined

//5. Null data type to store variable which is assigned with null or emptyvalue
let salary = null;
console.log(salary); //null
console.log(typeof salary); //object

//6. Symbol data type to store unique values(unique hidden identifier)
let countryOfOrigin = Symbol(); //only single symbol
let productInfo ={
    productName : "vivo x90",
    price:60000,
    [countryOfOrigin] : "China"
}
console.log(productInfo);
//**********Non-primitive data types(mutable data types modify the original value)
//1. Object data type to store key-value pairs
let person={
    name: "Poonam",
    empId: 125,
    visaStatus: true,
    address: {        
        city: "Pune",
        state:"MH",
        zip: 412105
    }
}
person.salary= 100000;
console.log(person.name); //Poonam
console.log(person.address.city); //Pune

console.log(person["name"]); //Poonam 
console.log(person.address["city"]); //Pune  
console.log(person);  

         
//2. Array represents a list of values
let fruits = ["Apple", "Banana", "Mango", "Grapes"];
let prices = [10, 20, 30, 40];
console.log(fruits[0]); //Apple
console.log(fruits[1]); //Banana
console.log(fruits[2]); //Mango
console.log(fruits[3]); //Grapes
console.log(prices[0]); //10
console.log(prices[1]); //20
console.log(prices[2]); //30
console.log(prices[3]); //40    
let fruitPrices = ["Apple", 10, "Banana", 20, "Mango", 30, "Grapes", 40];
console.log(fruitPrices[0]); //Apple
console.log(fruitPrices[1]); //10
console.log(fruitPrices[2]); //Banana
console.log(fruitPrices[3]); //20
console.log(fruitPrices[4]); //Mango
console.log(fruitPrices[5]); //30
console.log(fruitPrices[6]); //Grapes
console.log(fruitPrices[7]); //40

//3. Function data type to store a block of code or collection of statements written togetherwhich can be executed when called
//outside class 
//function with return type 
function add(a, b){
    return a+b;
}   
console.log(add(10, 10)); //30
//function without parameters
function login(){
console.log("Launch chrome browser)");
console.log("enter url");
console.log("enter username and password");
console.log("click on login button");
console.log("verify home page is displayed");


}
function logoutAndCloseBrowser(){
    console.log("Logging out and closing the browser");

}
launchBrowserAndLogin(); //Logging in to application
logoutAndCloseBrowser(); //Logging out and closing the browser
//function with parameters
function launchBrowserAndLogin(browserName,url,username,password){
console.log(`Launch ${browserName} browser`);
console.log(`enter url: ${url}`);
console.log(`enter username and password: ${username}, ${password}`);
console.log("click on login button");
console.log("verify home page is displayed");

}
launchBrowserAndLogin("chrome"); //Launch chrome browser


//4. Set data type to store unique values
let emplIds = new Set();
emplIds.add(101);
emplIds.add(102);
emplIds.add(103);
emplIds.add(101);//duplicate value will not be added
emplIds.add(102);
console.log(emplIds); //Set { 101, 102, 103 }
//5. Map data type to store key-value pairs(duplicate keys will be overwritten with latest value)
let empDetails = new Map();
empDetails.set("123", "Poonam");
empDetails.set("124", "solankar");
empDetails.set("124", "Kalebag");
empDetails.set("125", "Poonam");
empDetails.set("126", "Poonam");
empDetails.delete(126);
console.log(empDetails.get("124")); //Kalebag
console.log(empDetails.size); //3
console.log(empDetails); //Map(3) { '123' => 'Kalebag', '124' => 'solankar' }
//6. Date data type to store date and time values
let date = new Date();
console.log(date); //2024-06-19T10:30:00.000Z
console.log(date.getFullYear()); //2026
console.log(date.getMonth()+1); //10 month value are from 0-11, so we need to add 1 to get correct month
console.log(date.getDate()); //26
console.log(date.getDay()); //1day value are from 0-6 where 0 is for sunday
console.log(date.getHours()); //11
console.log(date.getMinutes());//15
console.log(date.getSeconds());//23

