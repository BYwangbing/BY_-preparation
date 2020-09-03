/*
* JS随机生成密码 (至少包含一个大写字母，小写字母，数字，特殊符号)
* 之所以选择数组是因为会在数组内随机插入大小写／数字／特殊符号
* */
function randomPassword(length) {
    length = Number(length);
    if (length < 6) {
        length = 6;
    } else if (length > 16) {
        length = 16;
    }
    let pwdArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '1234568790', '!@#$%&*()'];
    let password = [];
    let n = 0;
    for (let i = 0; i < length; i++) {

    }
}