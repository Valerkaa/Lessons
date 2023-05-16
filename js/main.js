const yourFunc = (arr) => {
  let array = [arr[0]];
  arr.forEach((element) => {
    if (arr.includes(element) !== array.includes(element)) array.push(element);
  });
  return array;
};
const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(yourFunc(arr1));
const arr2 = [1, 2, 3, 3, 3, 4, 3, 4, 4, 4, 4, 4, 3, 3];
function findNumber(arr) {
  let count = {};
  let maxNum = 0;
  let resalt = [];
  arr.forEach((item) => {
    if (count[item] === undefined) {
      count[item] = 1;
    } else {
      count[item]++;
    }
    if (count[item] > maxNum) maxNum = count[item];
  });
  console.log(count);
  for (let key in count) if (count[key] === maxNum) resalt.push(key);
  return resalt.shift();}

// вернет 5
