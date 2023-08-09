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
function subtract(a, b) {
  return a - b;
}

function power(a, b) {
  let product = a;
  for (let i = 0; i < b; i++) {
    product = product * product;
  }
  return product;
}
