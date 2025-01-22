// Modules protects their varibales and functions from leaking

console.log("Sum Module executed");

var x = "Hello world!";

function calculateSum(a,b) {
    const sum = a + b;

    console.log(sum);
}

module.exports = { x, calculateSum };