let xmlHttpRequest;
if (window.XMLHttpRequest) {
    xmlHttpRequest = new XMLHttpRequest();
} else {
    xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlHttpRequest.onreadystatechange = function () {
    if (xmlHttpRequest.readyState === 4 && xmlHttpRequest.status === 200) {
        console.log(xmlHttpRequest.responseText);
    }
    xmlHttpRequest.open("GET", "/ajax/demo_get.asp", true);
    xmlHttpRequest.send();
};

/*
readyState 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
    0: 请求未初始化 尚未调用 open()方法
    1: 服务器连接已建立 已经调用 open()方法，但尚未调用 send()方法
    2: 请求已接收 已经调用 send()方法，但尚未接收到响应
    3: 请求处理中 已经接收到部分响应数据
    4: 请求已完成，且响应已就绪
status
    200: "OK"
    404: 未找到页面
 */

const ajax = (url, method, async, data) => {
    return new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest();
        xmlHttpRequest.onreadystatechange = () => {
            if (xmlHttpRequest.status === 200 && xmlHttpRequest.readyState === 4){
                resolve(JSON.parse(xmlHttpRequest.responseText));
            }else {
                reject('发生错误');
            }
        };
        xmlHttpRequest.open(url, method, async);
        xmlHttpRequest.send(data||null)
    })
};