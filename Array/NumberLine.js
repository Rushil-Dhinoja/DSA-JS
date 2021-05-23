function reArrange(array) {
  // Declare a var J with initial value 0
  let j = 0;
  //  Loop through the array
  for (let i = 0; i < array.length; i++) {
    //Check if the current element is Negative or not if true go ahead

    if (array[i] < 0) {
      // Check if the both I and J is not equal, if true  go ahead
      if (i != j) {
        // Swap the element
        [array[i], array[j]] = [array[j], array[i]];
      }
      // Increment J
      j++;
    }
  }
  console.log(array);
}

reArrange([1, -5, 8, -7, 7, -6]);
