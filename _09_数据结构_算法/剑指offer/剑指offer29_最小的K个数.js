function GetLeastNumbers_Solution(input, k) {
    // write code here
    if (input.length < k) return [];
    input.sort((a, b) => a - b);
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(input[i])
    }
    return arr;
}

let arr = [4, 5, 1, 6, 2, 7, 3, 8];
console.log(GetLeastNumbers_Solution(arr, 4));