console.log(`Welcome to Currency Converter!\n1 USD equals 1 USD\n1 USD equals 113.5 JPY\n1 USD equals 0.89 EUR\n1 USD equals 74.36 RUB\n1 USD equals 0.75 GBP`)
console.log('I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP\n' +
    'Type the currency you wish to convert: USD')
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter currency you wish to convert to usd ", )(name) => {
    console.log(`Hello, ${name}!`);
    rl.close();
}
}
if (!exchangeRates[toCurrency]) {
    return `Error: Unknown currency '${toCurrency}'`;
}
if (amount < 1) {
    return `Error: Amount must be 1 or greater`;
}

// Perform conversion
const result = (amount / exchangeRates[fromCurrency]) * exchangeRates[toCurrency];
return `${amount} ${fromCurrency} equals ${result.toFixed(4)} ${toCurrency}`
}

// Create a readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Main function to run the program
function runCurrencyConverter() {
    console.log("Welcome to Currency Converter!");
    console.log("I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP.");

    rl.question("From (e.g., USD): ", (fromCurrency) => {
        rl.question("To (e.g., EUR): ", (toCurrency) => {
            rl.question("Amount: ", (amount) => {
                const numericAmount = parseFloat(amount);
                const result = convertCurrency(fromCurrency, toCurrency, numericAmount);
                console.log(result);
                rl.close(); // Close the readline interface
            });
        });
    });
}

// Run the converter
runCurrencyConverter();
