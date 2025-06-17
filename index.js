const readline = require('readline');

// generate key
function generateKey(length, characters = 'abcdefghijklmnopqrstuvwxyz0123456789') {

  let result = '';
  for (let i = 0; i < length; i += 1) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }

  return result;
}

//function check is valid number
function isValidNumber(length){
  return typeof length !== 'number' || length <= 0 || !Number.isInteger(length)
}

//function output to console a key
function outputKeyToConsole() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a positive number: ', (number) => {
    if (!isValidNumber(number)) {
      console.log('Length must be a positive integer.');
    } else {
      console.log(`Your key is:  ${generateKey(number)}`);
    }
    rl.close();
  });
}

outputKeyToConsole();

