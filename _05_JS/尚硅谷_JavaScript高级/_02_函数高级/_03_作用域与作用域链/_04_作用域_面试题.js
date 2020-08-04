var x = 10;

function _fn() {
    console.log(x);
}

function show(f) {
    var x = 20;
    f();
}

show(_fn);


console.log('-------------');

var fn = function () {
    console.log(fn)
};
fn();

var obj = {
    fn2: function () {
        // console.log(fn2)
        console.log(this === obj);
        console.log(this.fn2)
    }
};
obj.fn2();