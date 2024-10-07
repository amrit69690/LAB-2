// Import functions from the utilities.js module
import { welcomeMessage, convertCelsiusToFahrenheit, factorial, isPrime } from './utilities.js';

// Call the welcomeMessage function with example names
// This function prints a welcome message to the console
welcomeMessage("John", "Doe");

// Convert 25 degrees Celsius to Fahrenheit and print the result
// Calls the convertCelsiusToFahrenheit function and logs the output
console.log(`25°C in Fahrenheit is ${convertCelsiusToFahrenheit(25)}°F`);

// Calculate the factorial of 5 and print the result
// This calls the factorial function and displays the output
console.log(`Factorial of 5 is ${factorial(5)}`);

// Check if the number 7 is prime and print the result
// Calls the isPrime function and logs whether 7 is prime
console.log(`Is 7 prime? ${isPrime(7)}`);
