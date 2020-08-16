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
var result = 123;
function f() {

}