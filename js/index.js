// Custom shift function
function customShift(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  const first = arr[0];

  // Shift all elements to the left
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  // Remove the last element and make shorter the array
  arr.length = arr.length - 1;
  console.log(arr.length)// check the length of the array
  return first;
}

console.log(customShift([1, 2, 3, 4, 5]));
