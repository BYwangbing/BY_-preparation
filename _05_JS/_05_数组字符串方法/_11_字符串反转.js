/*——方法一： */
const _reverse = (str) => {
    // return str.split("").reverse().join("")
    return [...str].reverse().join("")
};
console.log(_reverse('Hello'));

const reverse = (str) => {
    let newString = [];
    for (let i = str.length - 1, j = 0; i >= 0; i--, j++) {
        newString[j] = str[i];
    }
    return newString.join("");
};
console.log(reverse('Hello'));

/*翻转字符串中单词顺序,但单词字母顺序不变: */
function reverseStr(param) {
    var arr = param.split(" ");
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr[arr.length - i] = arr[i];
    }
    return newArr.join(" ").trim();
}

console.log(reverseStr("smile at life"));

