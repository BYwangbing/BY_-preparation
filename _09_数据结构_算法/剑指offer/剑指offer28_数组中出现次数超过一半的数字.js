function MoreThanHalfNum_Solution(numbers) {
    if (numbers.length === 0) {
        return;
    }
    let arr = [], length = numbers.length;
    for (let i = 0; i < length; i++) {
        if (!arr[numbers[i]]) {
            arr[numbers[i]] = 1;
        } else {
            arr[numbers[i]]++;
        }
    }
    for (let i = 0; i < length; i++) {
        if (arr[numbers[i]] > length / 2) {
            return numbers[i]
        }
    }
    return;
}

let arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(MoreThanHalfNum_Solution(arr));