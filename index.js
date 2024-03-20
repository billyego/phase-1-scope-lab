// Declare customerName to be bob in global scope
var customerName = 'bob';

// Write a function that accesses the global customerName variable, uppercases it, and returns the modified value
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

// 3) Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring a variable without var/let/const makes it global
}

// 4) Write a function that changes the value of the global variable 'bestCustomer' to 'maybe bob'
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // This overwrites the global variable 'bestCustomer'
}

// 5) Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value
const leastFavoriteCustomer = 'someone';

// 6) Write a function that attempts to change the value of the constant 'leastFavoriteCustomer'
function changeLeastFavoriteCustomer() {
    // This would throw an error since you cannot reassign a value to a constant
    leastFavoriteCustomer = 'someone else';
}

module.exports = {
    customerName,
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    leastFavoriteCustomer,
    changeLeastFavoriteCustomer
};
