#!/usr/bin/env node
import { sum } from './add.js'; //if file in folder then we use './/add/add' or 1 step from outside folder "'../add'"
import { division } from './division.js';
import { multiplication } from './multplication.js';
import { sub } from './sub.js';
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    { message: "Select your 1st no",
        type: "number",
        name: "num1",
    },
    {
        message: "Select your 2nd no",
        type: "number",
        name: "num2",
    },
    {
        message: "Select operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    },
]);
if (answer.operator === "+") {
    let result = sum(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operator === "-") {
    let result = sub(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operator === "*") {
    let result = multiplication(answer.num1, answer.num2);
    console.log(result);
}
else if (answer.operator === "/") {
    let result = division(answer.num1, answer.num2);
    console.log(result);
}
console.log("Thanks for using My Calculator : Kamran Munawar");
