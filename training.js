const calc = function(arr) {
  let outArr = [0, 0];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element > 0) {
      outArr[0] = outArr[0] + 1;

      console.log("pos");
    } else {
      outArr[1] = outArr[1] + element;

      console.log("neg");
    }
  }

  return outArr;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// Testing the function using example input
calc(arr);
