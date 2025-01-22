console.log("Hello World");

var a = 1078698;
var b = 20986;

// This call back will only be pushed onto the call stack 
// once the call stack is empty(Global execution context is not there)
setTimeout(() => {
    console.log("call me right now");
}, 0);

setTimeout(() => {
    console.log("call me after 3 seconds");
}, 3000);

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication Result is :", c);