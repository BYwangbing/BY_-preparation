function deleteSpace(str){
    let str1 = str.replace(/\s+$/, '');
    let str2 = str1.replace(/^\s+/, '');
    return str2;
    // return str.replace(/^\s+|\s+$/g, '');
}
console.log(deleteSpace('   text '));
console.log(' text     '.trim());