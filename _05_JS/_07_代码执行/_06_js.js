/*const obj = {
    a: 1,
    b: 2,
    c: () => {
        console.log(this.a)
    },
    d: function () {
        console.log(this.b)
    }
};
obj.c(); // 1 ?
obj.d();*/

/*var a = {
    name: 'byteDance',
    func: function() {
        console.log(this.name);
    }
};

var fun1 = a.func;
fun1();*/

/*this.x = 9;    // this refers to global "window" object here in the browser
var module = {
    x: 81,
    getX: () => {
        return this.x;
    }
};

console.log(module.getX());

var retrieveX = module.getX;
console.log(retrieveX());*/

/*var people = {
    Name: "海洋饼干",
    getName : function(){
        console.log(this.Name);
    }
};
var bar = people.getName;

bar();    // undefined*/
/*function foo(){
    var a = 1 ;
    console.log(this.a);    // 10
}
var a = 10;
foo();*/
/*
var x = 10;
var obj = {
    x: 20,
    f: function () {
        var foo = function () {
            console.log(this.x);
        };
        foo();
    }
};
obj.f();

*/
/*var name = "windowsName";
function a() {
    var name = "Cherry";
    console.log(this.name);   // windowsName
    console.log("inner:" + this); // inner: Window
}
a();
console.log("outer:" + this)   // outer: Window*/


/*var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());*/

/*
// var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return ()=>{
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());*/

/*function sidEffecting(ary) {
    ary[0] = ary[2];
}

function bar(a, b, c) {
    c = 10;
    sidEffecting(arguments);
    return a + b + c;
}

function demo(arg) {
    arg.name = 'new Name'
}

console.log(bar(2, 2, 2));*/
/*
* 当非严格模式中的函数「有」包含剩余参数、默认参数和解构赋值，
* 那么arguments对象中的值「不会」跟踪参数的值（反之亦然）。
* */
function sidEffecting(ary) {
    ary[0] = ary[2];
}
function bar(a, b, c = 4) {
    c = 10;
    sidEffecting(arguments);
    return a + b + c;
}
function demo (arg) {
    arg.name = 'new Name'
}
console.log(bar(2, 2, 2));
