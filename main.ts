import  inquirer from "inquirer";
import chalk from "chalk";

let myBalance = 20000
let myPincode = 12345


console.log(chalk.yellowBright("\n \tWELCOME TO A.A ATM MACHINE\n"));

let pinAnswer = await inquirer.prompt(
    [
          {
                name: "pin",
                message: chalk.cyanBright("ENTER YOUR PIN"),
                type: "number"
          }
    ]
)

if(pinAnswer.pin === myPincode){
    console.log(chalk.yellowBright("\nCONGRATULATION, YOUR PIN CORRECT!\n"));

     let operationsAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "WHICH PROCESS YOU WANT TO PERFORM?",
                type: "list",
                choices: ["WITHDRAW", "CHECK BALANCE",]
            }
        ]
    );
    if(operationsAns.operation === "WITHDRAW"){
        let amountAns = await inquirer.prompt(
        [
              {
                name: "amount",
                message: "ENTER THE AMOUNT TO WITHDRAW ",
                type: "number"
                
              }
        ]
     ); 
     if(amountAns.amount > myBalance){
        console.log("INSUFFICENT BALANCE!!");
    }
    else{
        myBalance-=amountAns.amount
        console.log("YOUR AMOUNT WITHDRAW SUCCESFULLY")
        console.log(`YOUR REMAINING BALANCE ${myBalance}`);    
    }
}
else if(operationsAns.operation ==="CHECK BALANCE"){
    console.log(`YOUR ACCOUNT BALANCE IS ${myBalance}`);
}

}
else{
    console.log(chalk.red("pin is incorrect, try again!"));
}