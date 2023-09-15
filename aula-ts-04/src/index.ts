function multiply(num1: number, num2: number) {
    return num1 * num2;
}

function sum(num1: number, num2: number) {
    return num1 + num2;
}

function isEven(num :number) {
    return num % 2 === 0;
}

function showResult(result: number) {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's odd!`);
    }
}

(() => {
    const num1 = Number(prompt("First Number"));
    const num2 = Number(prompt("Second Number"));

    if (!num1 || !num1){
        console.log("enter the 2 numbers")
    } else {
        if (!isNaN(Number(num1)) && !isNaN(Number(num1))){
        let result = sum(Number(num1),Number(num2));
        result += multiply(1,2);
        showResult(result);
    } else {
        console.log("impossible to execute the function with these inputs")
    }
}
})();
