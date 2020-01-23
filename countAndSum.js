function array( arrayNums ) {
    const postiveArray = [];
    let sumForNegative = 0;
  
    for(let i = 0; i<arrayNums.length; i++) {
      if(arrayNums[i] > 0) {
        postiveArray.push(arrayNums[i]);
  
      }else{
        sumForNegative += arrayNums[i];
      }
    }
  
    console.log(postiveArray.length);
  
    return sumForNegative;

}
const result = array( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);

console.log(result);