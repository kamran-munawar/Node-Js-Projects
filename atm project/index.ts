import inquirer from 'inquirer';
import { faker } from '@faker-js/faker';

//requirement 
//User Data
//Atm machiner
//Atm function

interface User{
    id:number
    pin:number
    name:string
    accountNo:number
    balance:number
}

const createUser =()=>{
    let users:User[]=[]
    for(let i=0 ; i<10 ; i++){
        let user:User={
            id:i,
            pin:1000 + i,
            name:faker.person.fullName(),
            accountNo:Math.floor(1000000000 * Math.random()*800000000),
            balance:2000000 *1,
        }
        users.push(user)
    }

    return users
};

//atm machine

const atmMachine =async(users:User[])=>{
    const res =await inquirer.prompt({
        type:"number",
        message:"enter your pin code",
        name:"pin"

    })
    //console.log('Welcome to Bank of Kamran");
console.log(res)
const user= users.find((val)=> val.pin ==res.pin)
if (user){
    console.log(`welcome ${user.name}`)
    atmFunc(user)
    return
} else{
console.log("invalid user pin")
}
}

//atm function

const atmFunc =async(user:User)=>{
    const ans = await inquirer.prompt({
    type:"list",
    name:"select",
    choices:["Withdraw","balance","exit","Deposit"],  
    })

    if(ans.select=="Withdraw"){
    const amount =await inquirer.prompt({
        type:"number",
        message:"enter amount",
        name:"PakRupees"
    })
if(amount.PakRupees > user.balance){
    return console.log("sorry insufficient Balance...")
}
    if(amount.PakRupees > 50000){
        return console.log("maximum withdrawl allowed Rs 50000")
    }
    console.log(`withdraw amount : ${amount.PakRupees}`)
    console.log(`Balance amount : ${user.balance-amount.PakRupees}`)

}
if(ans.select=="balance"){
    console.log(`Balance:${user.balance}`)
    return
}
if(ans.select=="Exit"){
    console.log("Thanks for your time")
}

if(ans.select=="Deposit"){
    const Deposit= await inquirer.prompt({
        type:"number",
        message:"Deposit amount enter",
        name:"PakRupees"
    })

    console.log(`Deposit Amount : ${Deposit.PakRupees}`)
    console.log(`Total Balance ${user.balance +Deposit.PakRupees}`)
}

}

const users=createUser()

atmMachine(users);
