import { values, pick, minBy } from 'lodash';

const item = {
  width: 20,
  height: 45,
  depth: 100
};

const boxes = [
  {
    width: 10,
    height: 40,
    depth: 50,
    price: 10
  },
  {
    width: 30,
    height: 50,
    depth: 200,
    price: 15
  },
  {
    width: 200,
    height: 200,
    depth: 200,
    price: 9
  },
  {
    width: 190,
    height: 190,
    depth: 190,
    price: 7
  }
];

function getArrayFromObjValues(obj) {
  const pickObjArray = pick(obj, ['width', 'height', 'depth']);
  return values(pickObjArray);
}

function getObjects(item, boxes) {
  const itemValues = getArrayFromObjValues(item);
  itemValues.sort((a, b) => a - b);

  return boxes.filter(box => {
    const boxValues =  getArrayFromObjValues(box);
    const result = boxValues.map(val => {
      return val > itemValues[itemValues.length - 1];
    });
    if (!result.includes(false)) {
      return boxValues;
    }
  });
};

function getObjWithMinPrice(array) {
  return array.reduce((res, el) => {
    if (res.price === el.price) {
      return array;
    } 
    return minBy(array, 'price');
  })
}

const boxesArray = getObjects(item, boxes);
const result= getObjWithMinPrice(boxesArray);
console.log(result);
