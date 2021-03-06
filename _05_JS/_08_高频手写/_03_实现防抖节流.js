/*
防抖(debounce)：触发高频事件后 n 秒内函数只会执行一次，如果 n 秒内高频事件再次被触发，则重新计算时间
节流(thorttle)：高频事件触发，但在 n 秒内只会执行一次，所以节流会稀释函数的执行频率
区别：防抖动是将多次执行变为最后一次执行，节流是将多次执行变成每隔一段时间执行。
*/

/*
    节流: throttle
    防抖：debounce
    // https://segmentfault.com/a/1190000018445196
*/

// 实现防抖函数（debounce） 思路; 在规定时间内未触发第二次，则执行
// 仅仅只会调用一次！！！！！！！！！！
function debounce(func, wait) {
  let timer = null; // 创建一个用来存放定时器的返回值
  return () => {
    let _this = this;
    let args = arguments;
    if (timer) clearTimeout(timer); // 每次调用debounce函数都会将前一次的timer清空，确保只执行一次
    timer = setTimeout(() => {
      func.apply(_this, args);
    }, wait);
  };
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
        clearTimeout(timer);
      }, wait);
    }
  };
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
  };
}

/**
 在debounce中：在执行setTimeout函数之前总会将timer用setTimeout清除，取消延迟代码块，确保只执行一次
 在throttle中：只要timer存在就会执行setTimeout，在setTimeout内部每次清空这个timer，但是延迟代码块已经执行啦，确保一定频率执行一次
 **/

/*
    防抖(debounce):就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
        + search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
        + window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次
    节流(throttle):就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
 */
