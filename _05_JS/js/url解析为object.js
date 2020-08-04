function parseUrl(url) {
    let a = document.createElement('a');
    a.href = url;
    let obj = {
        'protocol': a.protocol,
        'host': a.host,
        'port': a.port,
        'path': a.pathname,
        'query': a.search,
        'params': (() => {
            let query = [], reset = {};
            let sQuery = a.search.replace(/^\?/, "").split("&");
            for (let i = 0; i < sQuery.length; i++) {
                if (sQuery[i]) {
                    query = sQuery[i].split("=");
                    reset[query[0]] = query[1];
                }
            }
            return reset;
        }),
        'hash': a.hash,
    };
    return JSON.stringify(obj)
}

let url = "https://www.qiniu.com/products/qcdn?entry=index&ts=1585703058520#feature";
/*
type: _type_, company: _company_, username: $user.name, email: $user.name@_company_.com
{"_type_":"_company_","$user.name":"pandora","_company_":"qiniu"}
 */

"{'protocol':'https','host':'www.qiniu.com','path':'/products/qcdn','params':{'entry':'index','ts':'1585703058520'},'hash':'feature'}"

String.prototype.replaceAll = function (prev, cur) {
    let regExp = new RegExp(prev);
    return this.replace(regExp, cur);
};