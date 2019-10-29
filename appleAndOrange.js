const houseRegion = [7, 11];

const applePoint = 5;
const orangePoint = 15;
const applesCoordinates = [-2, 2, 1];
const orangesCoordinates = [5, -6];


const getFruitsCount = (coordinatesArray, point, houseRegion) => {
  const result = coordinatesArray.filter(coordinate => {
    const region = coordinate + point;
    return region >= houseRegion[0] && region <= houseRegion[1];
  });
  return result.length
}

const apps = getFruitsCount(applesCoordinates, applePoint, houseRegion);
const oranges = getFruitsCount(orangesCoordinates, orangePoint, houseRegion);

console.log(apps, oranges)