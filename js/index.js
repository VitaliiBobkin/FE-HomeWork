
const arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]

// 1. Sum and count of positive elements
const positiveElements = arr.filter(num => num > 0);
const positiveSum = positiveElements.reduce((sum, num) => sum + num, 0);
const positiveCount = positiveElements.length;

// 2. Minimum element and its index
const minElement = Math.min(...arr);
const minIndex = arr.indexOf(minElement);

// 3. Maximum element and its index
const maxElement = Math.max(...arr);
const maxIndex = arr.indexOf(maxElement);

// 4. Count of negative elements
const negativeCount = arr.filter(num => num < 0).length;

// 5. Count of odd positive elements
const oddPositiveCount = arr.filter(num => num > 0 && num % 2 !== 0).length;

// 6. Count of even positive elements
const evenPositiveCount = arr.filter(num => num > 0 && num % 2 === 0).length;

// 7. Sum of even positive elements
const evenPositiveSum = arr
  .filter(num => num > 0 && num % 2 === 0)
  .reduce((sum, num) => sum + num, 0);

// 8. Sum of odd positive elements
const oddPositiveSum = arr
  .filter(num => num > 0 && num % 2 !== 0)
  .reduce((sum, num) => sum + num, 0);

// 9. Product of positive elements
const positiveProduct = positiveElements.reduce((product, num) => product * num, 1);

// 10. Set all elements to 0 except the largest one
const onlyMaxArray = arr.map(num => (num === maxElement ? num : 0));

// Output
console.log(`Sum of positive elements: ${positiveSum}`);
console.log(`Count of positive elements: ${positiveCount}`);
console.log(`Minimum element: ${minElement}, index: ${minIndex}`);
console.log(`Maximum element: ${maxElement}, index: ${maxIndex}`);
console.log(`Count of negative elements: ${negativeCount}`);
console.log(`Count of odd positive elements: ${oddPositiveCount}`);
console.log(`Count of even positive elements: ${evenPositiveCount}`);
console.log(`Sum of even positive elements: ${evenPositiveSum}`);
console.log(`Sum of odd positive elements: ${oddPositiveSum}`);
console.log(`Product of positive elements: ${positiveProduct}`);
console.log(`Array with only the maximum element kept:`, onlyMaxArray);
