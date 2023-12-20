/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  var left = 0;
  var right = 0;
  var mp = {};
  var cNum = 0;
  var res = null;
  for (var i = 0; i < s1.length; i++) {
    var c = s1[i]
    if (mp[c] === undefined) {
      mp[c] = 1;
      cNum++;
    } else {
      mp[c] = mp[c] + 1;
    }
  }

  while (right < s2.length) {
    var c = s2[right];
    if (mp[c] !== undefined) {
      mp[c] -= 1;
    }
    if (mp[c] == 0) {
      cNum -= 1;
    }
    while (cNum === 0) {
      if (res === null || res.length > s2.substring(left, right).length) {
        res = s2.substring(left, right + 1);
      }
      var leftChar = s2[left];
      left++;
      if (mp[leftChar] !== undefined) mp[leftChar]++; // 是目标字符，它的缺失个数-1
      if (mp[leftChar] > 0) cNum++;   // 它的缺失个数新变为0，缺失的种类数就-1
    }


    right++;
  }
  return res === null ? false : res.length === s1.length;
};
// @lc code=end

console.log(checkInclusion('ab', 'eidbaooo'));
console.log(checkInclusion('ab', 'eidboaoo'));
console.log(checkInclusion('adc', 'dcda'));