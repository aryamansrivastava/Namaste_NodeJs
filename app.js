// const {x, calculateSum} = require("./calculate/sum");
// const {calculateMultiply} = require("./calculate/multiply");

const {calculateMultiply, calculateSum} = require("./calculate");
const data = require("./data.json");

console.log(data); 
var name = "Namaste Nodejs";

var a = 10;
var b = 20;

console.log(name);  
// console.log(a+b);

// console.log(globalThis);
// console.log(this);     // Empty Object 

// window,frames is inside browser

// console.log(globalThis === global);

calculateSum(a,b);
calculateMultiply(a,b);
