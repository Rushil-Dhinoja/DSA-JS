function arrayMinMax(array) {
  // Initialize two empty variables
  let min, max;
  // Check if the the passed array's length === 1, if yes, return min and max both as same number
  if (array.length === 1) {
    min = array[0];
    max = array[0];
    return { min, max };
  }

  // Initialize the base value of min max

  //if array[0] > array[1] then min = array[1] else min = array[0], max = array[0] else max = array[1]
  if (array[0] > array[1]) {
    min = array[1];
    max = array[0];
  } else {
    min = array[0];
    max = array[1];
  }
  //Initialize a loop with with i = 2 because we already have checked for 0 and 1 element in th above condition
  for (let i = 2; i < array.length; i++) {
    // Check if current element is greater than max, if true set current element as max
    if (array[i] > max) {
      max = array[i];
    } // else check if current element is smaller than min, if true set current element as min
    else if (array[i] < min) {
      min = array[i];
    }
  }

  // Last return min and max
  return { min, max };
}

console.log(arrayMinMax([6]));
console.log(arrayMinMax([12, 6]));
