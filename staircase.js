// Input Format
// A single integer, , denoting the size of the staircase.

// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######

const n = 7;

for (let i = n; i > 0; i--){
  console.log (`${' '.repeat(i - 1)}${'#'.repeat(( n - i + 1))}`);
};