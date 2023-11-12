/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 基础 拆解子问题，由外而内 没有缓存会超时 [1, 2, 5] 11
// var coinChange = function(coins, amount) {
//     if(amount === 0) {
//         return 0
//     };
//     if(amount < 0) {
//         return -1
//     };
//     var res = Number.POSITIVE_INFINITY;
//     for(var i = 0; i < coins.length; i++){
//         var subRes = coinChange(coins, amount - coins[i]);
//         if(subRes === -1){
//             continue;
//         }
//         res = Math.min(res, subRes + 1);
//     } 
//     if(res === Infinity){
//         return -1;
//     }
//     return res;
// };

// 缓存
var cache = {};
var coinChange = function (coins, amount) {
  cache = {};
  return dp(coins, amount);
};

function dp(coins, amount) {
  if (amount === 0) {
    return 0
  };
  if (amount < 0) {
    return -1
  };
  if (cache[amount] !== undefined) {
    return cache[amount];
  }
  var res = Number.POSITIVE_INFINITY;
  for (var i = 0; i < coins.length; i++) {
    var subRes = dp(coins, amount - coins[i]);
    if (subRes === -1) {
      cache[amount] = -1;
      continue;
    }
    res = Math.min(res, subRes + 1);

  }
  cache[amount] = res === Infinity ? -1 : res;
  return cache[amount];
}

// dp table 实际上是对比上次的结果和这次的结果 有问题
// var cache = {};
// var coinChange = function (coins, amount) {
//   cache = {};
//   return dp(coins, amount);
// };

// function dp(coins, amount) {
//   if (amount === 0) {
//     return 0
//   };
//   if (amount < 0) {
//     return -1
//   };
//   if (cache[amount] !== undefined) {
//     return cache[amount];
//   }
//   var res = Number.POSITIVE_INFINITY;
//   coins.forEach(() => {
//     for (var i = 0; i < coins.length; i++) {
//       if (amount - coins[i]  < 0) {
//         cache[amount] = -1;
//         continue;
//       }
//       res = Math.min(dp(coins, amount), dp(coins, amount - coins[i]) + 1);
//     }
//   });
//   cache[amount] = res === Infinity ? -1 : res;
//   return cache[amount];
// }

const res1 = coinChange([1, 2, 5], 11)
const res = coinChange([2], 3)
console.log('res', res1, res)