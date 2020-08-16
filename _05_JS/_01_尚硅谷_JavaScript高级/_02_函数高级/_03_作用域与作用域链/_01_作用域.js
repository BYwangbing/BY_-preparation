var a = 10,
    b = 20;

function fn(x) {
    var a = 100,
        c = 300;
    console.log('fn()', a, b, c, x);

    function bar(x) {
        var a = 1000,
            d = 400;
        console.log('bar()', a, b, c, d, x)
    }

    bar(100);
    bar(200)
}

fn(10);