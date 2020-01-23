# Count of positives / sum of negatives

## Problem 

Create a function that takes an array of integers as an argument and returns an array, where the first element is the count of positive numbers and the second element is sum of negative numbers.

---
## Example

Input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15].

Output: [10, -65].

---
## Bonus
If the input array is empty or null, return an empty array.



const arr=[1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15];


function countPositivesSumNegatives(arr) {
    if (arr === null || arr.length === 0)
      return [];
    
    let positive = 0;
    let negative = 0;
    
    for (let i=0, x=arr.length; i<x; ++i)
    {
      if (arr[i] > 0)
        ++ positive;
      else
        negative += arr[i];
    }
    
    return [positive, negative];
}

countPositivesSumNegatives(arr);
