/*for (var i = 0; i < 5; i++) {
    console.log(i);
}*/
// 直接输出 0 到 4

for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000 * i);
}
// 开始输出一个 5，然后每隔一秒再输出一个 5，一共 5 个 5


/*for (var i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}*/

/*for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}*/

/*for (var i = 0; i < 10; i++) {
    ~function (i) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    }(i)
}*/
/*for (var i = 0; i < 10; i++) {
    setTimeout(((i)=>{
        return () => {
            console.log(i);
        }
    })(i), 1000)
}*/
/*for (var i = 0; i < 10; i++) {
    setTimeout(((i)=> () => console.log(i))(i), 1000)
}*/
/*var fn = function(i){
    console.log(i);
};
for (var i = 0; i < 10; i++) {
    /!*var fn = function(i){
        console.log(i);
    };*!/
    setTimeout(fn.bind(null, i), 1000)
}*/
/*
(function () {

})();*/