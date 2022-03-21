function averagePair(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      let pair = arr[i] + arr[j];
      let sum = pair / 2 == num;
      if (sum && i !== j) {
        return true;
      }
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5));

// averagePair([-1, 0, 3, 4, 5, 6], 4.1) => false
// averagePair([1, 2, 3], 2.5) => true
// averagePair([1, 2, 3, 4], 6)
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) => true
