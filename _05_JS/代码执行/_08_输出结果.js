/*对于 typeof, 可以正确判断除了null之外的所有基本类型，
而对于引用类型，除了函数外其他都会被判断为object*/
console.log(typeof (() => {
}));
console.log(typeof ['前端有的玩', '公众号']);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Function.prototype);
/*——instanceof,无法判断基本类型，但可以正确判断引用类型——*/
console.log('子君' instanceof String);
console.log(new Date() instanceof Date);

/*——实现instanceof——*/
function _instanceof(A, B) {
    let R = B.prototype;
    A = A.__proto__;
    // A的  __proto__  是不是强等于 B.prototype，不等于再找  A.__proto__ .__proto__  直到 __proto__ 为 null
    while (true) {
        if (A === R) return true;
        if (A === null) return false;
        A = A.__proto__;
    }
}

/*——实现new操作符——*/
function _new() {

}

