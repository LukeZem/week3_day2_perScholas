const add = (a, b) => {
    return a + b;
};
console.log(add(1,1))

const subtract = (a, b) => {
    return a - b;
};
console.log(subtract(4,2))

const multiply = (a, b) => {
    return a * b;
};
console.log(multiply(2,1))

const divide = (a, b) => {
    return a / b;
}
console.log(divide(4,2))

const isThisAString = (arg) => {
    if (typeof arg == "String") {
        return true
    } else {
        return false
    }
}
console.log(isThisAString(true));