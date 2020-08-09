let n = parseInt(readLine());
let map = new Map();
let count = 0;
for (let i = 0; i < n; i++) {
    let word = readLine();
    map.has(word) ? map.set(word, map.get(word)) : map.set(word, -1);
}
for (let item of map) {
    if (item[1] / n * 100 >= 1) {
        count++;
    }
}
// print(count);
console.log(count);