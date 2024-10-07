// Function 1: Prints a custom welcome message
// This function takes a first name and a last name as arguments and logs a welcome message to the console
export function welcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College!`);
}

// Function 2: Converts Celsius to Fahrenheit
// This function accepts a temperature in Celsius and returns the equivalent temperature in Fahrenheit
export function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32; // Formula for conversion
}

// Function 3: Calculates the factorial of a number
// This function takes a number as an argument and returns its factorial using recursion
export function factorial(number) {
    // Base case: factorial of 0 or 1 is 1
    if (number === 0 || number === 1) {
        return 1;
    } else {
        // Recursive case: n! = n * (n-1)!
        return number * factorial(number - 1);
    }
}

// Function 4: Checks if a number is prime
// This function takes a number as an argument and returns true if it is prime, false otherwise
export function isPrime(number) {
    // A number less than or equal to 1 is not prime
    if (number <= 1) return false;
    // Check divisibility from 2 to the number minus one
    for (let i = 2; i < number; i++) {
        // If divisible, it's not prime
        if (number % i === 0) return false;
    }
    // If no divisors found, it's prime
    return true;
}
