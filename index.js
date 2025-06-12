const readline = require('readline');

// Check if the name is valid
function isValidName(name) {
  return typeof name === 'string' && name.trim().length >= 3 && isNaN(name);
}

// Output username
function greetUser() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter your name: ', (name) => {
    if (!isValidName(name)) {
      console.log('Please enter a valid name with at least 3 characters.');
    } else {
      console.log(`Hello, ${name}!`);
    }
    rl.close();
  });
}

greetUser();


