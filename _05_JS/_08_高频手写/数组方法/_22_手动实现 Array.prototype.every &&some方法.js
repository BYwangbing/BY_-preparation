/*
* every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）
* 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
* 如果所有元素都满足条件，则返回 true。
*
* 注意：every() 对空数组检测 返回 true。
        every() 不会改变原始数组。
* 语法： array.every(function(currentValue,index,arr), thisValue)
* */

Array.prototype._every = function (everyCallback, thisValue) {
    if (!Array.isArray(this) || typeof everyCallback !== 'function' || !this.length) {
        return [];
    }
    let arr = thisValue || this;
    for (let i = 0; i < this.length; i++) {
        if (!everyCallback.call(this, this[i], i, arr)) {
            return false;
        }
    }
    return true;
};
var arr = [1, 2, 3];
var res = arr._every((item) => {
    return item > 0;
});
console.log(res);

/*
* some与every相对应，即只要有一个满足条件即为true，均不满足即为false
* */
Array.prototype._some = function (someCallback, thisValue) {
    if (!Array.isArray(this) || typeof someCallback !== 'function' || !this.length) {
        return [];
    }
    let arr = thisValue || this;
    for (let i = 0; i < this.length; i++) {
        if (someCallback.call(this, this[i], i, arr)) {
            return true;
        }
    }
    return false;
};

function getMaxFilmCost(film) {
    let map = new Map();
    map.set("A", 10);
    map.set("B", 25);
    map.set("C", 5);
    map.set("D", 15);
    map.set("E", 40);
    map.set("F", 30);
    let max = 0;
    for (let i = 0; i < film.length; i++) {
        let res = 0;
        for (let item of film[i]) {
            res += map.get(item);
            if (res > max) max = res;
        }
    }
    return max;
}

/**
 * 返回最小距离
 * @param arr int 整型二维数组 一组给定的坐标数组
 * @return int整型
 */
function getMinDistance(arrs) {
    // write code here
    var min = 99999999999999999999999999;
    for (let i = 0; i < arrs.length; i++) {
        for (let j = i + 1; j < arrs.length; j++) {
            let dis = distance(arrs[i], arrs[j]);
            if (dis < min) min = dis
        }
    }
    return min;
}

function distance(array1, array2) {
    let x = array1[0] - array2[0];
    let y = array1[1] - array2[1];
    let sum = Math.pow(x, 2) + Math.pow(y, 2);
    return Math.round(Math.sqrt(sum));
}

function generateSentences(words, sentence) {
    // write code here
    var res = [];
    res.push(sentence);

    for (let i = 0; i < words.length; i++) {
        const len = res.length;
        for (let j = 0; j < words[i].length; j++) {
            for (let k = 0; k < len; k++) {
                if (res[k].indexOf(words[i][j]) > -1) {
                    replace(words[i], res[k], j);
                }
            }
        }
    }

    return res.sort();

    function replace(word, sentence, tag) {
        for (let i = 0; i < word.length; i++) {
            if (i !== tag) {
                var temp = sentence.replace(word[tag], word[i]);
                res.push(temp);
            }
        }
    }
}

let words = [["question", "issue"], ["difficult", "embarrassment"]];
let sentence = "this question is too difficult for me to answer";

console.log(generateSentences(words, sentence));