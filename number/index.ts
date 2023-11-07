import inquirer from "inquirer";
import chalk from "chalk";

let genNum = Math.floor(Math.random()*2)
let user = await inquirer.prompt({
    name: 'number1',
    type: 'list',
    message:'Please select your Number',
    choices: ["0","1","2","3","4","5","6","7","8","9","10"]
});

if (genNum ==parseInt(user.number1)){
    console.log(chalk.bold.redBright("Congratulation you win"));}
    else {
        console.log(chalk.bold.redBright("Sorry You lose"));
    }

console.log(genNum)
