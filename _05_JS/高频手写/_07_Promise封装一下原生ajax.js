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
0: 请求未初始化
1: 服务器连接已建立
2: 请求已接收
3: 请求处理中
4: 请求已完成，且响应已就绪*/
