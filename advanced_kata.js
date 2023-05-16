const data = require("./data");

function getDivisable(array) {
  let answer = array[0];

  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (
        (array[i] % array[j] === 0 && array[i] !== array[j]) ||
        (array[j] % array[i] === 0 && array[i] !== array[j])
      ) {
        answer = [array[i], array[j]];
      }
    }
  }

  if (answer[0] / answer[1] >= 1) {
    return [answer[0] / answer[1]];
  } else return [answer[1] / answer[0]];
}

function checksumAdvanced(data) {
  const newArr = [];

  data.forEach((arr) => {
    newArr.push(getDivisable(arr));
  });

  return newArr.flat().reduce((acc, val) => acc + val, 0);
}

console.log(checksumAdvanced(data));

module.exports = checksumAdvanced;
