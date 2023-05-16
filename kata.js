const data = require("./data");

const array = [1, 2, 3];

function getHighestLowest(array) {
  let highest = array[0];
  let lowest = array[0];

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[i] > highest) {
        highest = array[i];
      }
      if (array[j] < lowest) {
        lowest = array[i];
      }
    }
  }
  return [highest - lowest];
}

// console.log(getHighestLowest(array));

function checksum(data) {
  const newArr = [];

  data.forEach((arr) => {
    newArr.push(getHighestLowest(arr));
  });

  return newArr.flat().reduce((acc, val) => acc + val, 0);
}

console.log(checksum(array));

module.exports = checksum;
