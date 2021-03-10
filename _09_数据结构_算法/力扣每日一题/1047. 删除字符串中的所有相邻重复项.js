/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  const stack = [];
  for (let ch of S) {
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.join('');
};
console.log(removeDuplicates('abbaca'));
