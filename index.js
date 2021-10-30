
function sumItems(array) {
  let sum = 0; 
 for (let i = 0; i < array.length; i++) {
  if (Array.isArray(array[i])) {
    sum += sumItems(array[i]); 
  }else  {
  sum += array[i];
  }
 }
  return sum; 
}

let baseCase = [1, [2, [3]], 4, 5]
console.log(sumItems(baseCase))
module.exports = sumItems;


