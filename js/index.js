const readline = require('readline');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeElement = (array, element) => {
  if (!Array.isArray(array) || array.length === 0) throw new Error('Array is empty or not an array');

  return array.filter(item => item !== element);
};

// function output to console an array
function outputValuesToConsole() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter a positive number from 1 to 10: ', (input) => {
    const number = Number(input);

    if (Number.isNaN(number) || number <= 0) throw new Error('Please enter a valid number.');

    // find min and max number in the array
    const min = Math.min(...array);
    const max = Math.max(...array);

    const isValid = number >= min && number <= max;

    if (!isValid) {
      console.log(`Number ${number} is greater than some elements in the array.`);
    } else {
      console.log(`Result array: ${removeElement(array, number)}`);
    }
    rl.close();
  });
}

outputValuesToConsole();
