const crypto = require("node:crypto");

console.log("Hello World");

var a = 1078698;
var b = 20986;

// pbkdf2 -> Password based key Derivative function

// Synchronous function -- will Block the main thread - DON't Use it
crypto.pbkdf2Sync("password", "salt", 50000, 50, "sha512");
console.log("First key is generated");

// ASync function
crypto.pbkdf2("password", "salt", 50000, 50, "sha512", (err,key) => {
    console.log("Second Key is Generated");
});

function multiplyFn(x, y) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a, b);

console.log("Multiplication Result is :", c);