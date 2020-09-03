var a = [5, 4, 3, 2, 1, 2, 3, 2, 1,];
Array.prototype.duplicate = function () {
    var tmp = [];
    this.concat().sort().sort(function (a, b) {
        if (a === b && tmp.indexOf(a) === -1) tmp.push(a);
    });
    return tmp;
};
console.log(a.duplicate());

Array.prototype.deleteEle = function () {
    var newArr = this;
    for (var i = newArr.length - 1; i >= 0; i--) {
        var targetNode = newArr[i];
        for (var j = 0; j < i; j++) {
            if (targetNode === newArr[j]) {
                newArr.splice(i, 1);
                break;
            }
        }
    }
    return newArr;
};
var arr = ["a", "b", "c", "c", "ab", "d", "ab", "d", "c"];
console.log(arr.deleteEle());

function reserve(arr) {
    arr.sort();
    let res = [];
    let head = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === head) {
            res.push(head);
            while (i + 1 < arr.length && arr[i + 1] === head) {
                i++;
            }
            if (i < arr.length) {
                head = arr[i]
            }
        } else {
            head = arr[i]
        }
    }
    return res;
}

console.log(reserve([1, 2, 7, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7]));
