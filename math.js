// This module is going to  contain the add, subtract, multiply and divide functions

/**
 * Adds given two numbers and returns the result (JSDoc documentation)
 * @param {number} a
 * @param {number} b
 * @returns the result
 */
function add(a, b) {
  return a + b;
}
// Some more changes here
/**
 * Divides a by b. If b is zero, this function will throw an exception.
 * @param {number} a any number
 * @param {number} b any non zero number
 * @returns the result
 */
function divide(a, b) {
  return a / b;
}
// Test code which confirms divide works
function testAdd() {
  //Test case: Dividing 10 by 2 must be 5
  const expected = 5;
  assert(expected === divide(10, 5), 'dividing 10 by 2 must be 5'); // invariant
}
/**
 * This function calculates the subtraction of a and b.
 * @param {number} a
 * @param {number} b
 * @returns number
 */

function subtract(a, b) {
  return a - b;
}

/**
 * This will compute the result by raising number a to the power of b in decimal system.
 * @param {number} a the base number
 * @param {number} b the power value to raise.
 * @returns The result.
 */
function power(base, exponent) {
  // pre conditions
  assert(typeof base === 'number');
  assert(typeof exponent === 'number');
  if (base === 0 || exponent === 0) {
    return 0;
  }

  let product = base;
  for (let i = 0; i < exponent; i++) {
    product = product * product;
  }
  return product;
}

/**
 * This function returns n fibonacci numbers
 * @param {number} n count of fibonnaci numbers
 * @returns array of n fibonacci numbers
 */
function fibonacciSequence(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

/**
 * is Prime Function
 * @param {number} number
 * returns boolean.
 */

function isPrimeFunction(number) {
  let isPrime = true;

  // check if number is equal to 1
  if (number === 1) {
    console.log('1 is neither prime nor composite number.');
  }

  // check if number is greater than 1
  else if (number > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  }

  // check if number is less than 1
  else {
    console.log('The number is not a prime number.');
  }
}

/**
 * Funtion to check if number is even or odd
 * @param {number} num
 * @returns 'even' if number is even else 'odd'
 */
function oddEven(num) {
  if (num % 2 === 0) return 'even';
  return 'odd';
}

/**
 * Computes the remainder when numerator is divided by denominator
 * @param {*} numerator
 * @param {*} denominator
 * @returns the remainder
 */
function remainder(numerator, denominator) {
  return numerator % denominator;
}
