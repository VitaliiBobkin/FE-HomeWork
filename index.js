const readline = require('readline');

//padString function, which takes 4 arguments
const padString = (string, targetLength, padChar, padLeft = false) => {
  if (typeof string !== 'string') {
    return 'Error: the first argument must be a string';
  }

  if (typeof targetLength !== 'number' || isNaN(targetLength)) {
    return 'Error: the second argument must be a number';
  }

  if (padChar === undefined) {
    return 'Error: missing symbol for completion';
  }

  if (typeof padChar !== 'string' || padChar.length !== 1) {
    return 'Error: symbol must be a string of length 1';
  }

  if (typeof padLeft !== 'boolean') {
    return 'Error: the last argument must be a boolean value';
  }

  if (targetLength < string.length) {
    return string.substring(0, targetLength);
  }

  const padLength = targetLength - string.length;
  const padding = padChar.repeat(padLength);
  return padLeft ? padding + string : string + padding;
};

const outputToConsolePadString = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter the string to pad: ', (str) => {
    rl.question('Enter the target length (number): ', (lengthInput) => {
      const targetLength = Number(lengthInput);

      rl.question('Enter the padding character (one char): ', (padChar) => {
        rl.question('Pad left? (true/false): ', (padLeftInput) => {
          const padLeft = padLeftInput.toLowerCase() === 'true';

          const result = padString(str, targetLength, padChar, padLeft);
          console.log('Result:', result);

          rl.close();
        });
      });
    });
  });
};

outputToConsolePadString();






