/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length,
    j = num2.length,
    add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add !== 0) {
    const x = i >= 0 ? num1.charAt(i) - '0' : 0;
    const y = j >= 0 ? num2.charAt(j) - '0' : 0;
    const result = x + y + add;
    ans.push(result % 10);
    add = Math.floor(result / 10);
    i--;
    j--;
  }
  return ans.reverse().join('');
};

/*

定义两个指针 ii 和 jj 分别指向num 1和 num 2 的末尾，即最低位
同时定义一个变量 add 维护当前是否有进位，然后从末尾到开头逐位相加即可

两个数字位数不同怎么处理，这里我们统一在指针当前下标处于负数的时候返回 0，
等价于对位数较短的数字进行了补零操作 这样就可以除去两个数字位数不同情况的处理
*/
