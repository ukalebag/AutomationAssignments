//Syntax to data in Typescript

//declaration variable:dataType = value;

//Data types in Typescript are into 2 different catergories
//1. Primitive datatypes(immutable)
//2. Non-primitive datatypes(mutable)


/************************************
 Primitve data in typescripts
 ***********************************/

//1. number - data type ued to store number with/without decimals
let num1:number= 10;
let num2:number = 12.34;
//num1 = "poonam"
console.log( num1);
console.log( num2);
//2. string- strore text values/collection of chars
let empName:string = "Poonam";
let location:string = 'Pune';
let company:string = `Infosys`;
console.log( empName); 
console.log( location);
console.log( company);

//3. Boolean data type to store true or false values
let x:number =10;
let y:number =20;
let z:boolean = x>y;
console.log(z); //false

//4. Null data type to store variable which is assigned with null or emptyvalue
let salary = null;
console.log(salary); //null

//5. Undefined data type to store variable which is not assigned any value
let empId;
console.log(empId); //undefined

//union represents more than one data type assigned to variable
let empAddress : string | number| boolean="123 Main Road ";
console.log(empAddress);
empAddress =12345;
console.log(empAddress);
empAddress = true;
console.log(empAddress);

//any the data type used to store any type of value
let data: any= 10;
console.log(data);
data="Hello";
console.log(data);
data=true;
console.log(data);

/************************
 Non-primitive data type
*************************/
//1. object data type used to store collection of key value pairs
interface personInfo {
    name:string,
    empId:number,
    visaStatus:boolean,
    address:{
        city: string,
        state:string,
        zip:number
    }
}
let person : personInfo={
    name: "Poonam",
    empId: 125,
    visaStatus: true,
    address: {        
        city: "Pune",
        state:"MH",
        zip: 412105
    }
}
person.name = "Reva";
person.empId=17;
person.visaStatus= false;
console.log(person);

//2. Array data type used to store collection of similar/different data type
let fruits:string[] = ["apple","banana","grapes"];
let price:number[]=[100,40,180];
let fruitsAndPrice:(string|number)[]=["apple",100,"banana",50,"grapes",180];
console.log(fruits);
console.log(price);
console.log(fruitsAndPrice);
console.log(fruitsAndPrice[4]);
//26.57

//3. Tuple represents storing mutliple values,different data type togetht at one place with a restriction on total value 

//Array vs Tuple
// store employee name, employee phone number,visa status within array
let empInfo:(string|number|boolean)[]=[999979,"reva",true,"Pune"];
//Tuple
// store employee name, employee phone number,visa status within tuple
let newEmpInfo : [string,number,boolean,string] =["Poonam",235,true,"Pune"]

//4. function data type used to store a block od code that performs a specific task
function launchBrowserAndLogin(browserName:string,url:string,username:string,password:string):void{//void means no data/no return type
console.log(`Launch ${browserName} browser`);
console.log(`enter url: ${url}`);
console.log(`enter username and password: ${username}, ${password}`);
console.log("click on login button");
console.log("verify home page is displayed");

}
function logoutAndCloseBrowser():void{
    console.log("logout from the application");
    console.log("Close the browser");
}
function getBalance():number{
    console.log("Navigate to account balance page");
    let accountBalance:number=10000;
    return accountBalance;

}

//5. Map represents a collection of key value pairs with JS class data type
let empDetails:Map<number,string> = new Map();
empDetails.set(23, "Poonam");
empDetails.set(124, "solankar");
empDetails.set(124, "Kalebag");
empDetails.set(125, "Poonam");
empDetails.set(126, "Poonam");
empDetails.delete(126);
console.log(empDetails.get(124)); //Kalebag
console.log(empDetails.size); //3
console.log(empDetails); //Map(3) { '123' => 'Kalebag', '124' => 'solankar' }

//6. Set data type to store unique values
let emplIds:Set<number> = new Set();
emplIds.add(101);
emplIds.add(102);
emplIds.add(103);
emplIds.add(101);//duplicate value will not be added
emplIds.add(102);
console.log(emplIds); //Set { 101, 102, 103 }

//7.Date data type to store date and time values
let date = new Date();
console.log(date); //2024-06-19T10:30:00.000Z
console.log(date.getFullYear()); //2026
console.log(date.getMonth()+1); //10 month value are from 0-11, so we need to add 1 to get correct month
console.log(date.getDate()); //26
console.log(date.getDay()); //1day value are from 0-6 where 0 is for sunday
console.log(date.getHours()); //11
console.log(date.getMinutes());//15
console.log(date.getSeconds());//23

