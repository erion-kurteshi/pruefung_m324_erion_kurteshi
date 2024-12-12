import chalk from 'chalk';

let myUnusedVariable = 42; // Trigger 'no-unused-vars' and 'prefer-const'
if (myUnusedVariable == '42') { // Trigger 'eqeqeq'
    console.log(chalk.blue('It works'));
}
