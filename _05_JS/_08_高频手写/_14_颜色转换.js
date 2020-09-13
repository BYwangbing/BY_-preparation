//十六进制颜色值的正则表达式
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;

/*16进制颜色转为RGB格式*/
const colorRgb = (hex) => {
    let sColor = hex.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            let sColorNew = "#";
            for (let i = 1; i < sColor.length; i++) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        //处理六位的颜色值
        let sColorChange = [];
        for (let i = 1; i < sColor.length; i+=2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i+2)))
        }
        return `RGB(${sColorChange.join(", ")})`
    } else {
        return hex;
    }
};
console.log(colorRgb("#0ABCAF"));