/*
    节流: throttle
    防抖：debounce
*/

// 实现防抖函数（debounce） 思路; 在规定时间内未触发第二次，则执行
// 仅仅只会调用一次！！！！！！！！！！
function debounce(func, wait) {
    let timer = null;
    return () => {
        let _this = this;
        let args = arguments;
        if (timer) clearTimeout(timer); // 每次调用debounce函数都会将前一次的timer清空，确保只执行一次
        timer = setTimeout(() => {
            func.apply(_this, args)
        }, wait)
    }
}

// 函数节流（throttle）思路; 在规定时间内只触发一次
// 当达到了一定的时间间隔就会执行一次；可以理解为是缩减执行频率
function throttle(func, wait) {
    let timer = null;
    return () => {
        let _this = this;
        let args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(_this, args);
                clearTimeout(timer)
            }, wait)
        }
    }
}

function _throttle(func, wait) {
    let preTime = Date.now();
    return () => {
        let _this = this;
        let args = arguments;
        let now = Date.now();
        if (now - preTime >= wait) {
            func.apply(_this, args);
            preTime = now;
        }
    }
}

/**
 在debounce中：在执行setTimeout函数之前总会将timer用setTimeout清除，取消延迟代码块，确保只执行一次
 在throttle中：只要timer存在就会执行setTimeout，在setTimeout内部每次清空这个timer，但是延迟代码块已经执行啦，确保一定频率执行一次
 **/