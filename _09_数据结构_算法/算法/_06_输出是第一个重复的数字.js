function duplicate(numbers, duplication) {
    /*——找到任意重复的一个值并赋值到duplication[0]——*/
    /*——排序相邻对比法——*/
    numbers.sort((a, b) => a - b);
    for (let i = 0; i < numbers.length; i++) {
        /*if (numbers[i] === numbers[i + 1]) {
            duplication[0] = numbers[i];
            return true
        }*/
        if (numbers.indexof(numbers[i]) !== i){
            duplication[0] = numbers[i];
            return true
        }
    }
    return false
}
// 解法2：对象特性
function _duplicate(number, duplication) {
    let obj = {};
    for (let i=0; i<number.length; i++){
        if (!obj[number[i]]){
            obj[number[i]] = true
        }else {
            duplication[0] = number[i];
            return true
        }
    }
    return false;
}