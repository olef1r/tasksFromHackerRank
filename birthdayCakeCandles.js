// Sample Input 0
// 4
// 3 2 1 3
// Sample Output 0
// 2

const array = [3, 2, 1, 3];

const maxHeight = Math.max(...array)
const result = array.filter(e => e === maxHeight);
console.log(result.length)