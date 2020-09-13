/*
* 滴滴
* 有一堆整数，请把他们分成三份，确保每一份和尽量相等（11，42，23，4，5，6 4 5 6 11 23 42 56 78 90）
* */
function getEqualArr(arr, count = 3) {
    //数组从大到小排序
    arr.sort((a, b) => b - a);
    //计算平均值
    let avg = arr.reduce((a, b) => a + b) / count;
    //从大到小求和，取最接近平均值的一组，放入二维数组
    let resArr = [];
    let current = 0;
    for (let i = 0; i < count - 1; i++) {
        if (current + arr[arr.length - 1] / 2 < avg && i) {
            arr.pop();
            resArr[i - 1].push(arr[arr.length - 1]);
        }
        current = 0;
        resArr[i] = [];
        arr.forEach((item, index) => {
            current += item;
            arr.splice(index, 1);
            resArr[i].push(item);
            if (current > avg) {
                current -= item;
                arr.splice(index, 0, item);
                resArr[i].pop();
            }
        })
    }
    resArr[count - 1] = arr;
    return resArr
}

//测试，第一个参数为数组，第二个为份数
const arr = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90];
console.log(getEqualArr(arr));


/*eval() 函数会将传入的字符串当做 JavaScript 代码进行执行*/
const sumTotal = arr => eval(arr.join('+'));

function equalArr(arr, n = 3) {
    const sortArr = arr.sort((a, b) => a - b);
    sumTotal(sortArr);
    let result = [];
    (getEachArr = () => {
        let startNum = 0;
        let eachArr = [];
        // 如果是最后一组，就直接push
        if (result.length === n - 1) {
            result.push(sortArr);
            return result;
        } else {

        }
    })()
}

const array = [1, 2, 3, 4, 5, 6, 7, 8];
equalArr(array);