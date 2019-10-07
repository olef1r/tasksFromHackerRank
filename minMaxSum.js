// Sample Input
// 1 2 3 4 5
// Sample Output
// 10 14

const array = [1, 2, 3, 4, 5];
const sums = [];

for (let i = 1; i <= array.length; i++) {
  let newArr = [...array];
  delete newArr[i - 1]
  const sum = newArr.reduce((sum, el) => {
    return sum + el
  });
  sums.push(sum); 
}

const min = Math.min(...sums);
const max = Math.max(...sums);

console.log(min, max);