/* 函数防抖:  在执行目标方法的时候，会等待一段时间，
当有执行相同的方法时，若前一个定时任务未执行完，则clear掉定时任务，重新定时
思路; 在规定时间内未触发第二次，则执行*/
function debounce(func, wait) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(func, wait);
    }
}
function _debounce(func, wait) {
    let timer = null;
    return () => {
        let _this = this;
        let args = arguments;
        if (timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(_this, args)
        }, wait)
    }
}
/* 函数节流:  通过使用定时任务延迟函数执行， 在延迟的时间内方法若被触发，就直接返回
* 思路; 在规定时间内只触发一次*/
function throttle(func, wait) {
    let timer = null;
    if (timer) {
        return;
    }
    timer = setTimeout(() => {
        func();
        timer = null;
    }, wait)
}

function _throttle(func, wait) {
    let timer = null;
    return () => {
        let _this = this;
        let args = arguments;
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(_this, args);
                timer = null;
            }, wait)
        }
    }
}

/* 函数节流的时间戳版简单实现 */
function __throttle(func, wait) {
    let prev = 0;
    return () => {
        let _this = this;
        let args = arguments;
        let now = new Date();
        if (now - prev > wait) {
            func.apply(_this, args);
            prev = now;
        }
    }
}