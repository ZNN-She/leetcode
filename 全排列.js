/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var result = [];
// var permute = function (nums) {
//   result = [];
//   nums.forEach((item) => {
//     var res = getStr(
//       nums.filter((subItem) => subItem !== item),
//       item + '',
//     );
//     if (!(result.includes(res))) {
//       result.push(res);
//     }
//   })
//   nums.reverse().forEach((item) => {
//     var res = getStr(
//       nums.filter((subItem) => subItem !== item),
//       item + '',
//     );
//     if (!(result.includes(res))) {
//       result.push(res);
//     }
//   })

//   return result.map(item => {
//     return item.split(',');
//   })
// };

// function getStr(nums, str) {
//   nums.forEach((item, index) => {
//     str = str + (str === '' ? item : `,${item}`);
//     getStr(nums.slice(index + 1));
//   })
//   return str;
// }
var result = [];

var permute = function (nums) {
  result = [];
  getListItem(nums, [], [])
  return result;
};

function getListItem(nums, resultItem, selecdIndex){
  if(resultItem.length === nums.length){
    result.push(resultItem)
    return;
  }
  nums.forEach((item, i) => {
    if(selecdIndex[i]){
      return;
    }
    resultItem.push(item);
    selecdIndex[i] = true;
    getListItem(nums, [...resultItem], [...selecdIndex]);
    resultItem.pop();
    selecdIndex[i] = false;
  })
}

const res = permute([1, 2, 3])
console.log(res);