function arrayUnionAndIntersection(arrayOne, arrayTwo) {
  // Initialize Two variables with 0 which will act as index
  let i = 0,
    j = 0;

  // Initialize two empty array one will be used to store Union and one will be used to store intersection
  const unionArray = [];
  const intersectionArray = [];

  //Loop until both i and j is less than arrays length
  while (i < arrayOne.length && j < arrayTwo.length) {
    //   If arrayOne[i] is less than arrayTwo[j] we will add arrayOne[i] into the unionArray and will increment i by one
    if (arrayOne[i] < arrayTwo[j]) {
      unionArray.push(arrayOne[i]);
      i++;
    }
    //  if arrayOne[i] is greater than  arrayTwo[j] we will add arrayTwo[j] into the unionArray and will increment j by one
    else if (arrayOne[i] > arrayTwo[j]) {
      unionArray.push(arrayTwo[j]);
      j++;
    }
    //  if arrayOne[i] is equal to arrayTwo[j] we will add any of arrayOne[i] or arrayTwo[j] to the union array and also to intersection array
    else if (arrayOne[i] === arrayTwo[j]) {
      unionArray.push(arrayOne[i]);
      intersectionArray.push(arrayOne[i]);
      i++;
      j++;
    }
  }

  // Only for Union if arrayOne is bigger than arrayTwo than this loop will be executed and will push all the remaining elements in ArrayOne into unionArray
  while (i < arrayOne.length) {
    unionArray.push(arrayOne[i]);
    i++;
  }
  // Only fot Union if arrayTwo is bigger than arrayOne than this loop will be executed and  will push all the remaining elements in ArrayTwo into unionArray
  while (j < arrayTwo.length) {
    unionArray.push(arrayTwo[j]);
    j++;
  }

  console.log(unionArray);
  console.log(intersectionArray);
}

arrayUnionAndIntersection([5, 5], [1, 2, 3, 4, 5]);
