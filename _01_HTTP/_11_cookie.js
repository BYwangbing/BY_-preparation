function setCookie(name, cValue, exDays) {
    var d = new Date();
    d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cValue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function _getCookie(name) {
    /* 获取浏览器所有cookie将其拆分成数组 */
    var arr = document.cookie.split('; ');
    for (var i = 0; i < arr.length; i++) {
        /* 将cookie名称和值拆分进行判断 */
        var arr2 = arr[i].split('=');
        if (arr2[0] === name) {
            return arr2[1];
        }
    }
    return '';
}

// 3：删除cookie

/*删除cookie的思想很简单，就是将cookie的过期时间设置为过期(-1)，
已经过了一天。那么就能实现了，当然了需要调用设置cookie的函数setCookie*/

function removeCookie(name) {
    /* -1 天后过期即删除 */
    setCookie(name, 1, -1);
}

// 删除所有cookie
function clearCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}