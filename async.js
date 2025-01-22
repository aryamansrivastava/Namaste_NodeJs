const fs = require("fs");
const https = require("https");

console.log("Hello world");

var a = 1078698;
var b = 20986;

// These all are Async Functions
// api call
https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Data Fetched Successfully");
});
// setTimeout called
setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
}, 5000);
// read file system called
fs.readFile("./file.txt", "utf8", (err,data) => {
    console.log("file data: ", data); 
}); 

function multiplyFn(x, y) {
    const result = a*b;
    return result;
}

var c = multiplyFn(a,b);

console.log("Multiplication Result is: ", c);