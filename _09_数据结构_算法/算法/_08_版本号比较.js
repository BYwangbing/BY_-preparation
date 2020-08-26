/*
* http://blog.csdn.net/YJD19970908/article/details/81297264?utm_medium=distribute.pc_relevant.none-task-blog-title-6
* 版本号比较方法
* 传入两个字符串，当前版本号：curV；比较版本号：reqV
* 调用方法举例：compare("1.1","1.2")，将返回false
* 1.去除版本中的字母-->2.转为数组-->3.位对位比较
*
* 明确版本号的几个表现
* 1. 长度不确定。
* 2. 是否含有字母不确定
* */
function compareVersion(curV, reqV) {
    if (curV && reqV) {
        let curArr = curV.split('.'),
            reqArr = reqV.split('.');
        let minLength = Math.min(curArr.length, reqArr.length),
            position = 0, diff = 0;
        // 依次比较版本号每一位大小，当对比得出结果后跳出循环
        while (position < minLength) {
            diff = parseInt(curArr[position]) - parseInt(reqArr[position]);
            if (diff !== 0) {
                break;
            }
            position++;
        }
        diff = (diff !== 0) ? diff : (curArr.length - reqArr.length);
        return diff > 0;
    } else {
        console.log('版本号不能为空');
        return false;
    }
}

console.log(compareVersion('1.2.3a', '1.2.3a'));

function argsWith(string, str) {
    if (arguments.length > 2) {
        throw "传入的参数数量不对";
    }
    return string.slice(-str.length) === str;
}

// 如果有字母，那就把所有的字母转为.ascii
function formatString() {
    if (arguments.length !== 1) {
        return "无字符串，无需格式化";
    }
    let reg = /([a-zA-Z])/g;
    let regExp = arguments[0].match(reg);
    if (regExp === null) {
        return arguments[0].split(".");
    }
    if (regExp && regExp.length !== 1) {
        throw "格式错误，只允许出现一个字母";
    }
    let regStr = regExp.join("");
    if (argsWith(arguments[0], regStr) !== true) {
        throw "传入的版本号有错";
    }
    return arguments[0].replace(regStr, "." + regStr.charCodeAt()).split('.');
}

function myCompare() {
    if (arguments.length > 2) {
        return "目前只允许比较两个版本号";
    } else if (arguments.length < 2) {
        return "比较版本必须传入参数";
    } else {
        if (arguments[0] === arguments[1]) {
            return '两个版本号相等';
        }
        let preVersion = formatString(arguments[0]); // 上一个版本号
        let curVersion = formatString(arguments[1]); // 当前版本号
        let length = Math.min(preVersion.length, curVersion.length);
        for (let i = 0; i !== length; i++) {
            if (preVersion[i] > curVersion[i]) {
                return '第一个版本号大'
            } else if (preVersion[i] < curVersion[i]) {
                return '第二个版本号大'
            }
        }
        if (length === preVersion.length) {
            return '第二个版本号大'
        } else {
            return '第一个版本号大';
        }
    }
}

console.log(myCompare("2.3.1.a", "2.4.1.6"));