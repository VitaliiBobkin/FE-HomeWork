const readline = require('readline');
const PROMPTS = require('./prompts.js');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//TODO Need to comment two functions twoDimensionalArray() or removeCharacters()
// or doMath() before start application to correctly perform the task of each of the functions

//Function to calculate average of numbers only
const averageNumbers = (arr) => {
  const numericValues = arr.filter((element) => typeof element === 'number');
  if (numericValues.length === 0) return 0;

  const sum = numericValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / numericValues.length;
};

const mixedArray = [1, 'aer', true, 4, 'hello', 5];
console.log(`${PROMPTS.RESULT} ${averageNumbers(mixedArray)}`);

// Math operation function
const doMath = () => {

  const calculateResult = (x, y, sign) => {
    const num1 = Number(x);
    const num2 = Number(y);

    if (Number.isNaN(num1) || Number.isNaN(num2)) throw new Error(PROMPTS.ERROR_INVALID_NUMBER);

    switch (sign) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : PROMPTS.DIVISION_BY_ZERO;
      case '%': return num2 !== 0 ? num1 % num2 : PROMPTS.DIVISION_BY_ZERO;
      case '^': return Math.pow(num1, num2);
      default: return PROMPTS.INVALID_OPERATOR;
    }
  };

  rl.question(PROMPTS.INPUT_X_VALUE, (x) => {
    rl.question(PROMPTS.INPUT_Y_VALUE, (y) => {
      rl.question(PROMPTS.INPUT_SIGN_VALUE, (sign) => {
        const result = calculateResult(x, y, sign);
        console.log(`${PROMPTS.RESULT} ${result}`);
        rl.close();
      });
    });
  });
};

doMath()

//function creates a two-dimensional array
const twoDimensionalArray = () => {
  rl.question(PROMPTS.ENTER_ROWS, (rowsInput) => {
    const rows = parseInt(rowsInput, 10);

    if (Number.isNaN(rows) || rows <= 0) throw new Error(PROMPTS.ERROR_ROWS);

    rl.question(PROMPTS.ENTER_COLUMNS, (columnsInput) => {
      const columns = parseInt(columnsInput, 10);

      if (Number.isNaN(columns) || columns <= 0) throw new Error(PROMPTS.ERROR_COLUMNS);

      const array = [];

      for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
          const value = `rows: ${i} * columns: ${j}`;
          row.push(value);
        }
        array.push(row);
      }

      console.log(PROMPTS.RESULT, array);
      rl.close();
    });
  });
};

twoDimensionalArray();

//function removes characters from a string
const removeCharacters = () => {
  rl.question(PROMPTS.ENTER_WORD, (inputString) => {
    rl.question(PROMPTS.ENTER_CHARS_TO_REMOVE, (charsInput) => {
      const charsToRemove = charsInput.split('');

      const result = inputString
        .split('')
        .filter(char => !charsToRemove.includes(char))
        .join('');

      console.log(PROMPTS.RESULT, result);
      rl.close();
    });
  });
};

removeCharacters();

