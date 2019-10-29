const grades = [73, 77, 38, 33];

const result = grades.map(g => {
  if ((g % 5) !== 0 && g > 38 && (g % 5) >= 3) {
    return g;
  };
})

console.log(result)