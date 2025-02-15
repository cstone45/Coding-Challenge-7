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

//Task 3: Arrow Function
const calculateLoyaltyDiscount = (amount, years) => { //Establishes calculateLoyaltyDsicount as a function
    if (years >= 5) discountedPrice = amount - (amount * 0.15); //Establishes a parameter for the equation
    else if (years >=3) discountedPrice = amount - (amount * 0.1); //Establishes a parameter for the equation
    else discountedPrice = amount - (amount * 0.05); //Establishes a parameter for the equation
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`); //Logs the equation to the console and creates a function to log the results of the equation to 2 decimal places
};
calculateLoyaltyDiscount(100, 6); //Logs Discounted Price with an output of $85.00
calculateLoyaltyDiscount(200, 2); //Logs Discounted Price with an output of $190.00