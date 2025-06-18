'use strict'

const arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];

//function to get positive numbers and add positive numbers to an array
const getPositiveNumbers = (arr, callback)=> {
  if (!Array.isArray(arr) || arr.length === 0) throw new Error('Array is empty or not an array');

  const positiveNumbers = [];

  arr.forEach((num) => {
    if (callback(num)) {
      positiveNumbers.push(num);
    }
  });

  return positiveNumbers.length > 0 ? positiveNumbers : null;
}
//function callback check if the number is positive
const isPositive = (num) => num > 0;

const result = getPositiveNumbers(arr, isPositive);
console.log(result);

