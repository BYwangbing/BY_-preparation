/*
for (var i = 0; i < 4; i++) {
    setTimeout(function () {
        console.log(i);
    }, 300);
}*/
/*
for (var i = 0; i < 4; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 300);
    })(i)
}*/

// for (var i = 0; i < 4; i++) {
//     (function () {
//         var temp = i;
//         setTimeout(function () {
//             console.log(temp);
//         }, 300);
//     })()
// }

//代码片段一
var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function () {
        return function () {
            return this.name;
        };
    }
};
console.log(object.getNameFunc()());  //?  the window


//代码片段二
var name2 = "The Window";
var object2 = {
    name2: "My Object",
    getNameFunc: function () {
        var that = this;
        return function () {
            return that.name2;
        };
    }
};
console.log(object2.getNameFunc()()); //?  my object
