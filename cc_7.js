//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) { //Declares the Function
    let total = (subtotal + (subtotal * taxRate) - discount).toFixed(2) //Creates the formula to determine the total fixed to 2 decimal places
    console.log(`Total Invoice: $${total}`); //Logs the Equation to the console so that it displays the results of an inputted calculation
};
calculateInvoice(100, 0.08, 5); //Logs the Total Invoice using the equation with the applied parameters of this command
calculateInvoice(500, 0.1, 20); //Logs the Total Invoice using the equation with the applied parameters of this command

//Task 2: Function Expression
function calculateHourlyWage(salary, hoursPerWeek) { //Declares the Function
    let hourlyWage = (salary / (hoursPerWeek * 52)).toFixed(2) //Creates the Formula to determine the hourlyWaage set to 2 decimal places
    console.log(`Hourly Wage: $${hourlyWage}`); //Logs the Equation to the console as a template literal
};
calculateHourlyWage(52000, 40); //Logs Hourly Wage with an output of $25.00
calculateHourlyWage(75000, 35); //Logs Hourly Wage with an output of $42.21