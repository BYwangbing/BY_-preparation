/*
* location.hostname 返回 web 主机的域名
* location.pathname 返回当前页面的路径和文件名
* location.port 返回 web 主机的端口 （80 或 443）
* location.protocol 返回所使用的 web 协议（http: 或 https:）
* */
/*
属性	    描述
hash	    从井号 (#) 开始的 URL（锚）
host	    主机名和当前 URL 的端口号
hostname	当前 URL 的主机名
href	    完整的 URL
pathname	当前 URL 的路径部分
port	    当前 URL 的端口号
protocol	当前 URL 的协议
search	    从问号 (?) 开始的 URL（查询部分）

设置或获取 href 属性中在井号“#”后面的分段:  window.location.hash
*
* */
/*
https://juejin.im/post/6844903856556474381#heading-1
* 目的：取得URL内传递的参数，并且解析成对象
*
* 如果URL中包含了#，我们只需要解析?到#之间的字符串就可以
* 如果不包含，那么第一个?后所有的内容都是我们需要解析的
* */
let url = 'http://NaoNao.com/?product=shirt&color=blue&newuser&size=m#Hello';

function getAllUrlParams(url) {
    /*先用JS拿到URL，如果函数传参了URL，那就用参数。如果没传参，就使用当前页面的URL*/
    let querystring = url ? url.split('?')[1] : window.location.search.slice(1);
    // 如果没有传参，返回一个空对象
    if (!querystring) {
        return {};
    }
    /*如果后面的字符串存在#，我们还得将#后面的字符串去掉，因为#后面的内容并不是我们需要获取的参数，而是网页位置的标识符*/
    querystring = querystring.split("#")[0];
    /*先将传递的参数分成数组*/
    let arr = querystring.split('&');
    /*字符串拆分成数组后，创建一个对象，用来存储所有的参数*/
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        // 分离成key:value的形式
        let key_value = arr[i].split("=");
        /*为每一个变量key分配对应的值value 如果我们得到的value不是一个正确的参数，我们就用true来表示这个参数名存在*/
        let paramKey = key_value[0];
        let paramValue = (typeof (key_value[1]) === "undefined") ? true : key_value[1];
        paramKey = paramKey.toLowerCase();
        if (typeof paramValue === "string"){
            paramValue = paramValue.toLowerCase();
        }
        /*paramValue，这些参数可能是索引数组，非索引数组，又或者是常规字符串*/
    }
}

getAllUrlParams(url);

// Object.fromEntries(new URLSearchParams(url.split('?')[1]));


// URL is http://NaoNao.com/?product=shirt&color=blue&newuser&size=m
const urlParams = new URLSearchParams(window.location.search);
// 判断参数是否存在
console.log(urlParams.has('product')); // true
// 获取参数对应的值
console.log(urlParams.get('product')); // "shirt"
