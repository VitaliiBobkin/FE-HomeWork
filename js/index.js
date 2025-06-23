
//function indexOf - to check an element in the array
const customIndexOf =  (array, searchElement)=> {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

// function lastIndexOf - to check an element in the array from the last element
const customLastIndexOf = (array, searchElement)=> {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

// function find - to find an element in the array also returns undefined
const customFind = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
  return undefined;
}

// function findIndex - to find an element in the array also returns -1
const customFindIndex = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

// function includes - to check an element in the array, returns true or false
const customIncludes = (array, searchElement) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === searchElement) {
      return true;
    }
  }
  return false;
}

// function every - to check if all elements in the array are true, returns true
const customEvery = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

// function some - to check if any element in the array is true, returns true
const customSome = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

const arr = [1, 2, 3, 4, 2];

console.log(`IndexOf: ${customIndexOf(arr, 2)}`);
console.log(`LastIndexOf: ${customLastIndexOf(arr, 2)}`);
console.log(`Find: ${customFind(arr, x => x > 2)}`);
console.log(`FindIndex: ${customFindIndex(arr, x => x > 2)}`);
console.log(`Includes 5: ${customIncludes(arr, 5)}`);
console.log(`Every > 0: ${customEvery(arr, x => x > 0)}`);
console.log(`Some > 3: ${customSome(arr, x => x > 3)}`);
