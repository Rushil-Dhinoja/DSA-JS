function rotateByOne(array) {
  //   X will be the last element of given array
  let x = array[array.length - 1];

  //   Loop through array from last index to first till the i becomes 1
  for (let i = array.length - 1; i > 0; i--) {
    // This line is to make you understand each iteration
    console.log(`i = ${i}, curent[i] = ${array[i]}, new[i]= ${array[i - 1]}`);
    // Swap the previous element of the array with current element
    array[i] = array[i - 1];
  }
  // replace first element with x
  array[0] = x;
  console.log(array);
}

rotateByOne([1, 2, 3, 4, 5]);
