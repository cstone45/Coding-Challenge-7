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

//Task 4: Parameters and Arguments
function calculateShippingCost(weight, location, expedited = false) { //Establishes calculateShippingCost as a function
    let costRate = {"USA": 5 + (weight * 0.5) + 10, "Canada": 10 + (weight * 0.7),}; //Establishes the individual equations used to calculate Shipping Cost by Location
    let shippingCost = costRate[location]; //Creates the equation to calculate the Shipping Cost
    console.log(`Shipping Cost: $${shippingCost.toFixed(2)}`); //Logs the function to the console and sets the outputs to 2 decimal places
};
calculateShippingCost(10, "USA", true); //Logs the function with an output of 20
calculateShippingCost(5, "Canada", false); //Logs the function with an output of 13.50

//Task 5: Returning Values
function calculateLoanInterest(principle, rate, years) { //Establishes the calculateLoanInterest as a function and lists its parameters
    let interest = principle * rate * years; //Creates the equation from which the Total Interest will be generated
    return `Total Interest: $${interest.toFixed(2)}`; //Logs the Format in which the calculated value will be shown in the console
};
console.log(calculateLoanInterest(1000, 0.05, 3)); //Logs parameters into the equation and generated an output of $150.00
console.log(calculateLoanInterest(5000, 0.07, 5)); //Logs parameters into the equation and generates an output of $1750.00

//Task 6: Higher Order Functions
function filterHighValueTransactions(transactions, filterFunction) { //Establishes the function for the problem
let highValueTransaction = transactions.filter(filterFunction); //Establishes what a high value function is in context of the situation
console.log(`High Value Functions: ${highValueTransaction}`); //Logs the function to the console as a template literal
};
let transactions = [500, 1200, 3000, 800, 2200]; //Establishes the array containing the transactions
filterHighValueTransactions(transactions, amount => amount > 1000); //Establishes the perameters for the equation to abide by to generate the output