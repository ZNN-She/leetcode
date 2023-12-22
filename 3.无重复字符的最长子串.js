/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var left = 0;
  var right = 0;
  var mp = {};
  var res = '';

  while (right < s.length) {
    var c = s[right];
    if (!mp[c]) {
      mp[c] = 1;
      var newRes = s.substring(left, right + 1);
      if (res.length < newRes.length) {
        res = newRes
      }
      right++;
    } else {
      mp[s[left]] --;
      left ++;
    }
  }

  return res.length;
};
// @lc code=end

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
