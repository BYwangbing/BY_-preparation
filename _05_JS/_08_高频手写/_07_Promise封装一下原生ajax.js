function ajaxPromise(url, method, data, async) {
    let xmlHttp = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    return new Promise((resolve, reject) => {
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                if ((xmlHttp.status >= 200 && xmlHttp.status < 300) || xmlHttp.status === 304) {
                    try {
                        let response = JSON.parse(xmlHttp.responseText);
                        resolve(response)
                    } catch (e) {
                        reject(e)
                    }
                } else {
                    reject(xmlHttp.status)
                }
            }
        };
        xmlHttp.timeout = 2000; // 超时时间，单位是毫秒
        xmlHttp.withCredentials = true; // 用来指定跨域 Access-Control 请求是否应当带有授权信息，如 cookie 或授权 header 头
        xmlHttp.onload = function () {
            // 请求完成。在此进行处理。
        };
        xmlHttp.ontimeout = function (e) {
            // XMLHttpRequest 超时。在此做某事。
        };

        let arr = [];
        for (let key in data) {
            arr.push(key + '=' + data[key]);
        }
        let getData = arr.join("&");
        if (method.toUpperCase() === "GET") {
            xmlHttp.open(method.toUpperCase(), url + "?" + getData, async);
            xmlHttp.send(null);
        } else if (method.toUpperCase() === "POST") {
            xmlHttp.open(method.toUpperCase(), url, async);
            xmlHttp.responseType = "json";
            xmlHttp.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=utf-8');
            xmlHttp.send(getData);
        }
    })
}

/*
每当readyState改变时就会触发onreadystatechange函数
    0: 请求未初始化 XMLHttpRequest 对象已创建或已被 abort() 方法重置
    1: 服务器连接已建立 open() 方法已调用，但是 send() 方法未调用。请求还没有被发送。
    2: 请求已接收 send() 方法已调用，HTTP 请求已发送到 Web 服务器。未接收到响应。
    3: 请求处理中 所有响应头部都已经接收到。响应体开始接收但未完成。
    4: 请求已完成，且响应已就绪 HTTP 响应已经完全接收。
async: 该参数规定请求是否异步处理
*/
