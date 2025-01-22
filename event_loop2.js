const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer Expired"), 0);

Promise.resolve("Promise").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
    setTimeout(() => console.log("2nd Timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File Reading CallBack");
});

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"));
    console.log("nextTick");
});

function printA() {
    console.log("a =",a);
}

printA();
console.log("Last Line of the file.");
