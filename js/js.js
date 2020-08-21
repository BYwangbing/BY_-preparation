function string(str){
    let obj = {};
    for (let i=0; i<str.length; i++){
        let key = str[i];
        if (obj[key]){
            obj[key]++;
        }else {
            obj[key] = 1;
        }
    }
    console.log(obj);
    let maxStr = '';
    let count = 0;
    for (let key in  obj){
        if (count<obj[key]){
            count = obj[key];
            maxStr = key
        }
    }
    return maxStr
}

console.log(string('assd'));