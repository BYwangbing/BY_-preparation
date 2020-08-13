function fn(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        let key = str[i];
        obj[key] ? obj[key]++ : obj[key] = 1;
    }
    console.log(obj); //输出的是完整的对象，记录着每一个字符及其出现的次数
    let count = 0;
    let _string = "";
    for (let key in obj) {
        if (count < obj[key]) {
            count = obj[key];
            _string = key
        }
    }
    // return "出现次数："+count +"出现最多的字母是：" + _string
    return `出现次数：${count}次， 出现最多的字母是：${_string}`
}

console.log(fn('qwertyssa'));