const inputArray = [5, 6, 8, 7, 2, 0, 5];

// Using LOOP

// Function to reverse an array which will except an array of n elements as a argument.
function reverseArray(array) {
  //Empty array to which will be used to store a reversed array
  const reversedArray = [];
  // For loop that will loop through the array passed as argument and will push each element to new array in reverse order
  for (let i = array.length - 1; i >= 0; i--) {
    // Pushing the element to the new array
    reversedArray.push(array[i]);
  }
  console.log("Reversed Array", reversedArray);
}

reverseArray(inputArray);

// Using Recursion

const reverseArrayRecursive = (array, start, end) => {
  // Checks if the start is >= end and if returned true than array will be reversed
  if (start >= end) {
    console.log(array);
    return;
  }

  // swap the first and last element in the array with each other
  [array[start], array[end]] = [array[end], array[start]];
  // call the same function till the condition is matched
  reverseArrayRecursive(array, start + 1, end - 1);
};

reverseArrayRecursive(inputArray, 0, inputArray.length - 1);
