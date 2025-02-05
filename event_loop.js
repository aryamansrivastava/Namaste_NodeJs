const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CallBack");
});

setTimeout(() => console.log("Timer Expired"), 0);

process.nextTick(() => console.log("process.nextTick"));

function printA() {
    console.log("a =",a);
}

printA();
console.log("Last Line of the file.");

// a = 100
// Last line of the file
// nextTick
// Promise
// Timer expired
// setImmediate
// file reading cb
// 2nd next tick
// 2nd timer
// 2nd setImmediate