/*
将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，
例如`110000000000000000000000000000000000000000000000`，
表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，
也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
时间区间被选中，例如`110010000000000000000000000000000000000000000000`，
表示00:00-1:00和02:00-02:30这两个时间区间被选中了。

要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
示例输入：`"110010000000000000000000000000000000000000000000"`
示例输出：`["00:00~01:00", "02:00~02:30"]`
0              1                    2            3               4               5              6
00:00 ~ 00:30  00:30 ~ 01:00    01:00 ~ 01:30    01:30 ~ 02:00   02:00 ~ 02:30   02:30 ~ 03:00  03:00 ~ 03:30
[{"start":0,"end":2}, {"start":4,"end":5}]*/

function timeBitmapToRanges(val) {
    if (typeof val !== "string") {
        return "类型错误";
    }
    if (val.length !== 48) {
        return "字符串长度不是48";
    }
    const sourceArr = val.split('');
    const activeIndex = [];
    for (let i = 0; i < sourceArr.length; i++) {
        if (sourceArr[i] === 1..toString()) {
            activeIndex.push(i);
        }
    }
    return parseIndex(activeIndex);
}

// 将连续的index拼接在一起
function getSerialIndex(arr) {
    const result = [];
    let i = 0;
    result[i] = [arr[0]];
    arr.reduce((prev, cur) => {
        (cur - prev === 1) ? (result[i].push(cur)) : (result[++i] = [cur]);
        return cur
    });
    return result;
}

function parseIndex(activeIndex) {
    const filterArr = getSerialIndex(activeIndex);
    // console.log(filterArr);
    let result = [];
    for (let i = 0; i < filterArr.length; i++) {
        const startTime = filterArr[i][0];
        const endTime = filterArr[i][filterArr[i].length - 1];
        // console.log(startTime, endTime);
        //  判断始末时间的奇偶性
        const startTemp = startTime % 2 === 0 ? `${tool(startTime / 2)}:00` : `${tool(Math.floor(startTime / 2))}:30`;
        const endTemp = endTime % 2 === 0 ? `${tool(endTime / 2)}:30` : `${tool(Math.ceil(endTime / 2))}:00`
        result[i] = `${startTemp}~${endTemp}`;
    }
    console.log(result);
}

function tool(val) {
    return val > 10 ? val : '0' + val;
}

let str = '010000110000000000000000000100000000000011100000';
timeBitmapToRanges(str);

// https://github.com/shiziChing/experience-code/blob/master/JS_algorithm/youzan.js