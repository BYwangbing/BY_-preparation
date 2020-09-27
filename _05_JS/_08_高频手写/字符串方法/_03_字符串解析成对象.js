const search = 'a=1&b=2&b=3&c=4&d=&d=&e=你好';

function parse(search) {
    // TODO
    const arr = search.split("&");
    let obj = {}, newArr = [];
    arr.forEach((u, v) => {
        newArr = u.split("=");
        if (typeof obj[newArr[0]] === "undefined"){
            obj[newArr[0]] = newArr[1]
        }
    });
    return obj
}

// parse(search);
console.log(JSON.stringify(parse(search)));