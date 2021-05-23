// The Logic to find Kth Min element
// First sort the array
// Then return sortArray[k-1]

// Function to short an array
function sortArray(array) {
  var done = false;

  // Go through loop until done is false
  while (!done) {
    // Set Done as true so if the condition returns false then loop will be stopped
    done = true;
    // Go through another loop which sorts the array
    for (let i = 1; i < array.length; i++) {
      // if array[i-1] is greater than array[i]
      if (array[i - 1] > array[i]) {
        // If condition is true make done false and loop swap the elements
        done = false;
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
      }
    }
  }
  return array;
}

function KthMinElement(array, k) {
  if (array.length < k) {
    console.log("Array size is smaller than K");
  }
  const sortedArray = sortArray(array);
  console.log(sortedArray[k - 1]);
}

KthMinElement([8, 15, 9, 25, 45, 6, 7], 4);
