

let a = 0;
const obj = {
    a: 1,
    b: function () {
        console.log(this.a);
    }
};
const obj1 = {
    a: 2
};
const fun = obj.b;
fun();
fun.apply(obj);
fun.bind(obj1).apply(obj);
const fun1 = fun.bind(obj1);
new fun();

console.log('---------------------------------');

/*
function func() {
    this.name = "Hellen";
}

console.log(typeof func.prototype);
func.prototype.getName = function () {
    console.log(this.name);
};
const Obj = {};
Obj.__proto__ = func.prototype;
func.call(Obj);
if (Obj.getName) {
    console.log("yes");
    Obj.getName();
}
console.log("end");*/
function func(source) {
    var target = {};
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object') {
                target[key] = func(source[key]);
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}
var c = { a1: "a1", a2: { b1: "b1", b2: "b2" }, a3: undefined, a4: null, a5: 1 };
var b = func(c);
console.log(b);
