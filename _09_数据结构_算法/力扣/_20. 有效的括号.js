// https://leetcode-cn.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);
  let flag = true;
  const stk = [];
  s.split('').forEach((ch) => {
    if (pairs.has(ch)) {
      // 栈长度为0，栈的最后一项不是‘所要匹配的有括号’
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        flag = false;
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  });
  return flag && !stk.length;
};

const s = '([}}])';
console.log(isValid(s));
