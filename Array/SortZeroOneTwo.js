function sort(array) {
  let countZero = 0,
    countOne = 0,
    countTwo = 0;
  const sortedArray = [];
  for (i = 0; i < array.length; i++) {
    switch (array[i]) {
      case 0:
        countZero++;
        break;
      case 1:
        countOne++;
        break;
      case 2:
        countTwo++;
        break;
    }
  }

  while (countZero > 0) {
    sortedArray.push(0);
    countZero--;
  }

  while (countOne > 0) {
    sortedArray.push(1);
    countOne--;
  }
  while (countTwo > 0) {
    sortedArray.push(2);
    countTwo--;
  }

  console.log(sortedArray);
}

sort([0, 1, 2, 0, 1, 2, 0, 0, 0, 2, 1, 2, 1, 0, 1, 2]);
