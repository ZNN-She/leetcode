/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  var left = 0;
  var right = 0;
  var mp = {};
  var cNum = 0;
  var res = [];
  for (var i = 0; i < p.length; i++) {
    var c = p[i]
    if (mp[c] === undefined) {
      mp[c] = 1;
      cNum++;
    } else {
      mp[c] = mp[c] + 1;
    }
  }

  while (right < s.length) {
    var c = s[right];
    if (mp[c] !== undefined) {
      mp[c] -= 1;
    }
    if (mp[c] == 0) {
      cNum -= 1;
    }
    while (cNum === 0) {
      if (s.substring(left, right + 1).length === p.length) {
        res.push(left);
      }
      var leftChar = s[left];
      left++;
      if (mp[leftChar] !== undefined) mp[leftChar]++; // 是目标字符，它的缺失个数-1
      if (mp[leftChar] > 0) cNum++;   // 它的缺失个数新变为0，缺失的种类数就-1
    }


    right++;
  }
  return res;
};
// @lc code=end

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));