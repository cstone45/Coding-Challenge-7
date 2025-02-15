//Task 1: Function Declaration
function calculateInvoice(subtotal, taxRate, discount) { //Declares the Function
    let total =(subtotal + (subtotal * taxRate) - discount).toFixed(2)
    console.log(`Total Invoice: $${total}`); //Logs the Equation to the console so that it displays the results of an inputted calculation
};
calculateInvoice(100, 0.08, 5); //Logs the Total Invoice using the equation with the applied parameters of this command
calculateInvoice(500, 0.1, 20); //Logs the Total Invoice using the equation with the applied parameters of this command