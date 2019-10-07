// Sample Input 0
// 07:05:45PM

// Sample Output 0
// 19:05:45

const time = '12:40:22AM';
const array = time.split(':');

function convertTime(array){
  if (time.endsWith('pm') || time.endsWith('PM')) {
    array[0] = parseInt(array[0]) + 12;
    return arrayToString(array);
  } 
  array[0] == 12 ? array[0] = '00' : null;
  return arrayToString(array);
}

function arrayToString(array) {
  array[2]= array[2].substring(0,2);
  const stringTime = array.join(':');
  return stringTime;
}

convertTime(array);
