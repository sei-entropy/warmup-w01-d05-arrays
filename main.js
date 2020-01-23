// function to count +ve numbers and sum -ve numbers
// Paramteres: array; 
// Return: array with count of +ve numbers and sum of -ve numbers for the second element
const counter = function(array) {
    let returnedArray = [0, 0];
    if(array === null) return [];
    if(array.length === 0 || array.length === undefined) return [];
    for(let i =  0; i < array.length; i++) {
        if(array[i] >= 0) returnedArray[0]++; 
        else returnedArray[1] += array[i];
    } 
    return returnedArray;
};

console.log(counter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(counter([]));
console.log(counter(null));