function launchBrowserAndLogin(){
console.log("Logging in to application");


}
function logoutAndCloseBrowser(){
    console.log("Logging out and closing the browser");

}
launchBrowserAndLogin(); //Logging in to application
logoutAndCloseBrowser(); //Logging out and closing the browser

let countryOfOrigin = Symbol();//only single symbol
let productInfo ={
    productName : "vivo x90",
    price:60000,
    [countryOfOrigin] : "China"
}
console.log(productInfo);

