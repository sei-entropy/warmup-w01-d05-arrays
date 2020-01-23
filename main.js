//  Declare the function with an array as an arguement
const countPosSumNeg = function(numsArr) {
  // Declare the output array variable
  const outArr = [0, 0];
  // For loop that will iterate through the input array
  for (let i = 0; i < numsArr.length; i++) {
    // Get the current array element, in a seperate variable
    const element = numsArr[i];
    // Check if the element positive, then count it and add it to output array
    if (element > 0) {
      // Counting the positive numbers
      outArr[0] = outArr[0] + 1;
    } // Else some other
    else {
      // Sum the negative and zero numbers
      outArr[1] = outArr[1] + element;
    }
  }
  // Return the output array
  return outArr;
};

// Example input
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// Testing the function using example input
countPosSumNeg(arr);
