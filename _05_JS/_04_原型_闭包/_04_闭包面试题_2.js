/*
变量的作用域是在函数定义声明的时候就是确定的，而非在函数运行时
* return返回的对象的fun属性对应一个新建的函数对象，
* 这个函数对象将形成一个闭包作用域，
* 使其能够访问外层函数的变量n及外层函数fun,为了不将fun函数和fun属性搞混，
* 我们将上述代码修改如下:
* */
function _fun_(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return _fun_(m, n);
        }
    }
}

var a = _fun_(0);//undefined
a.fun(1);//0
a.fun(2);//0
a.fun(3);//0

var b = _fun_(0).fun(1).fun(2).fun(3);
//undefined,0,1,2

var c = _fun_(0).fun(1);//undefined,0,
c.fun(2);//1
c.fun(3); //1