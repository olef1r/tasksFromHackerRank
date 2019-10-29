const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
 
let minArr = [];
let maxArr = [];

let min;
let max;

scores.forEach((e, i) => {
  if (i === 0) {
    min = e;
    max = e;
  }

  if (e > max) {
    max = e;
    maxArr.push(i);
  } else if (e < min) {
    min = e;
    minArr.push(i);
  }
});

console.log(maxArr.length, minArr.length);