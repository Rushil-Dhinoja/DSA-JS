function contagiousMaxSum(array) {
  let max_so_far = array[0],
    max_ending_here = 0;

  for (let i = 0; i < array.length; i++) {
    max_ending_here = max_ending_here + array[i];

    if (max_ending_here < 0) {
      max_ending_here = 0;
    } else if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
    console.log(
      `i = ${i}, max_ending_here =${max_ending_here}, max_so_far=${max_so_far}`
    );
  }
  return max_so_far;
}

console.log(contagiousMaxSum([1, 2, 3, -2, 5]));
