/*
https://www.nowcoder.com/practice/fe6b651b66ae47d7acce78ffdd9a96c7?tpId=13&&tqId=11180&rp=1&ru=/ta/coding-interviews&qru=/ta/coding-interviews/question-ranking
* 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
* 例如输入字符串abc,则按字典序打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
* 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
* */
function Permutation(str) {
  let result = [];
  if (str.length <= 1) {
    return str;
  }
  str = str.split('').sort().join('');
  strArrange(result, '', str);
  return result;
}

function strArrange(result, done, str) {
  if (str.length === 0) {
    result.push(done);
  }
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && str[i] === str[i - 1]) {
      continue;
    }
    let left = str.slice(0, i);
    let right = str.slice(i + 1);
    strArrange(result, done + str[i], left + right);
  }
}

console.log(Permutation('wfk'));
