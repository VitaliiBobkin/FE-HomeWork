function greetUser() {
  const name = prompt('Please enter your name:');

  if (!isValidName(name)) {
    alert('Please enter a valid name with at least 3 characters.');
  } else {
    showGreeting(name);
  }
}

// function to show greeting
function showGreeting(name) {
  const wantsGreeting = confirm('Would you like to see a greeting?');
  if (wantsGreeting) {
    alert(`Hello, ${name.trim()}!`);
  }
}

// check if the name is valid
function isValidName(name) {
  return typeof name === 'string' && name.trim().length >= 3;
}

greetUser();
