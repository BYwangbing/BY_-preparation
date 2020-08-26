function duplicate(numbers, duplication) {
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    let obj = {}; // 利用一个对象，将访问过的数字保存到对象里
    for (let item of numbers) {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            duplication[0] = item;
            console.log(duplication[0]);
            return true;
        }
    }
    return false
}

const array = [2, 3, 1, 0, 2, 5, 3];
let arr = [];
console.log(duplicate(array, array));