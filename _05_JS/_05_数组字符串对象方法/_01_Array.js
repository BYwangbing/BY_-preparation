let arr = ['吃饭饭', '睡觉觉', '打豆豆'];
/*// 1. 检测数组
console.log(arr instanceof Array);
console.log(Array.isArray(arr))*/
/*
1.Array.isArray(arr)
2.Object.prototype.toString.call(arr) === '[Object Array]'
3.arr instanceof Array
4.array.constructor === Array
 */
/*
* 除了对象之外，其他的数据类型的toString返回的都是内容的字符创，
* 只有对象的toString方法会返回对象的类型。
*
* */
/*
二. 转换方法：
    toLocaleString(),　　// 把数组转换为本地字符串
    toString(),
    valueOf() 返回数组本身,　
 */
/*let arr1 = arr.toLocaleString();
console.log( arr1);

let arr2 = arr.toString();
console.log(arr2);

let arr3 = arr.valueOf();
console.log(arr3);*/

/*
三. 栈方法：
    push() 给数组最后添加元素，参数可以是多个，也就添加多个,返回添加后的数组的长度
    pop() 把数组最后一元素删除，返回删掉的元素，该方法没有参数
    pop()方法从数组末尾移除最后一项，减少数组的length值，然后返回移除的项。所以，该数组会改变原数组
 */
/*let arr4 = arr.pop();
console.log(arr4);
console.log(arr);*/

/*let arr5 = arr.push('王福坤坤', '小冰冰');
console.log(arr5);
console.log(arr);*/
/*/!*如果需要合并两个数组，可以使用apply方法*!/
var a = [1, 2, 3];
var b = [4, 5, 6];
// console.log(a, Array.prototype.push.apply(a, b));//[1,2,3,4,5,6] 6
console.log(a, Array.prototype.push.call(a, b));//[1,2,3,[4,5,6]] 4*/
/*
四. 队列方法：
    shift() 删除数组的第一个元素，返回被删除的元素，该方法没有参数
    unshift() 向数组开头添加元素，参数可以是多个，也就添加多个,返回添加后的数组的长度
 */
/*let arr6 = arr.shift();
console.log(arr6);
console.log(arr);*/

/*let arr7 = arr.unshift('Match', 'Shmily');
console.log(arr7);
console.log(arr);*/

/*
    unshift()比push()要慢差不多100倍！因此，平时还是要慎用unshift()，特别是对大数组
    那如果一定要达到unshift()的效果，可以借助于Array的reverse()方法，Array的reverse()的方法能够把一个数组反转
    先把要放进数组的元素用push()添加，再执行一次reverse()，就达到了unshift()的效果
 */

/*
五. 排序方法
    reverse()  reverse 比sort 在性能上要好的多得多；
    sort() 其实sort方法是基础的冒泡排序:
        当把一个很大的数组或者很复杂的数组进行sort排序时，会有性能的问题，不过可以根据具体情况进行处理
 */
/*let pArray = [1, 3, 8, 11, 4, 5, 7, 6, 9];

function compare(value1, value2) {
    if (value1 > value2) {
        return 1
    } else if(value1 < value2){
        return -1
    }else {
        return 0
    }
}

let arr8 = pArray.sort(compare);
console.log(arr8);
console.log(pArray);*/

/*let fArray = [1, 3, 8, 4, 5, 7, 6, 9];
let arr9 = fArray.reverse();
console.log(arr9);
console.log(fArray);*/
/*
六. 操作方法
    concat()  合并数组，不改变原数组； 如果不提供参数，concat()方法返回当前数组的一个浅拷贝
    slice()  删除元素  该方法两个参数，
            第一个参数删除开始的下标，第二个是结束的下标但不包含结束的下标，
            如果第二个参数为没有，则删除第一个参数对应的下标到数组结尾，另外，两个参数都可以为负数
    splice()  有删除，替换，插入的功能；可以传3个参数
            第一个开始的下标，第二个 删除/替换 的元素个数，第三个 替换/插入 的数据 当
            第二个参数为0时就是插入的功能
 */
/*let cArray1 = ['吃饭饭', '睡觉觉', '打豆豆'];
let cArray2 = ['王福坤坤', '小冰冰', '瑞娜娜', '静晓晓'];
let cArray = cArray1.concat(cArray2);
console.log(cArray);
console.log(cArray1);
console.log(cArray2);*/

/*/!*concat()方法也可以用于将对象合并为数组，但是必须借助call()方法*!/
var newArray = Array.prototype.concat.call({ a: 1 }, { b: 2 });
console.log(newArray);// [{ a: 1 }, { b: 2 }]
console.log(newArray[0].a);//1*/

/*let sArray = ['王福坤坤', '小冰冰', '瑞娜娜', '静晓晓'];
let sArray1 = sArray.slice(2, 4);
console.log(sArray);
console.log(sArray1);*/

/*　如果不提供参数，slice()方法返回当前数组的一个浅拷贝*/
/*
slice()方法涉及到Number()转型函数的隐式类型转换，
当start被转换为NaN时，相当于start = 0；
当end被转换为NaN时(end为undefined除外)，则输出空数组
* */
/*可以使用slice()方法将类数组对象变成真正的数组*/
// Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 }); // ['a', 'b']

/*let spArray = ['王福坤坤', '小冰冰', '瑞娜娜', '静晓晓'];
let spArray1 = spArray.splice(2, 1, 'Match', 'Shmily');
console.log(spArray);
console.log(spArray1);*/

/*
七. 位置方法
    indexOf() 可以接受两个参数，第一个为要查找的项，第二个为开始查找的位置下标，
        如果查到第一个，就停止查找，也就是不会查找后续的元素， 返回值
        当找的到返回找到的元素的下标，找不到时返回-1
    lastIndexOf()  和indexOf() 方法一样一样的，不过该方法是从有往左查找

    注意：在比较第一个参数与数组中的每一项时，会使用全等操作符；
    也就是说，要求查找的项必须严格相等（就像使用===一样）
 */
/*let inArray = [3, 4, 5, 4, 3, 4, 4, 4, 4, 4, 5, 2, 3, 3];
console.log(inArray.indexOf(3));
console.log(inArray.indexOf(3, 1));
console.log(inArray.indexOf(3, 12));
console.log(inArray.indexOf(3, 15));
console.log(inArray.lastIndexOf(3));
console.log(inArray.lastIndexOf(3, 12));
console.log(inArray.lastIndexOf(3, 1));*/

/*let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(numbers.indexOf(4));  // 3 
console.log(numbers.lastIndexOf(4)); // 5*/
//5  查找方向不同，[1,2,3,4（我是indexOf(4)的位置）,5,4(我是lastIndexOf(4)的位置),3,2,1];
/*
八. 抵达方法：
    5个 每个方法都接受两个值：要在每一项元素运行的函数和运行函数的作用域对象(影响this的值)；
    传的函数有三个参数：元素的值，下标，数组本身。5 个方法返回值不一样；
        every() 对数组的每一项运行给定的函数，如果每一项都返回 true 则返回 true;
        filter()  对数组的每一项运行给定的函数， 返回该函数会返回 true 的元素组成的数组
        forEach()  对数组的每一项运行给定的函数，该方法没有返回值
        map()  对数组的每一项运行给定的函数 ，返回每次函数调用的结果组成的数组
        some()  对数组的每一项运行给定的函数，如果该函数对任意一项返回 true , 则返回 true
        find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined
 */
/*
1、map() 方法返回一个新数组，新数组中的元素为原始数组中的每个元素调用函数处理后得到的值。
2、map() 方法按照原始数组元素顺序依次处理元素。
    注意： map() 不会对空数组进行检测。
    注意： map() 不会改变原始数组。
    注意：函数的作用是对数组中的每一个元素进行处理，返回新的元素。
3、语法
    map是数组的方法，有一个参数，参数是一个函数，函数中有3个参数
        参数1：item必须。当前元素的值
        参数2：index，可选。当前元素在数组中的索引值
        参数3：arr可选。当前元素属于的数组对象
        array.map(function(item,index,arr){})
 */

/*let array = [1, 2, 3, 4, 5, 6];
let newArray = array.map((item) => {
    item *= 2;
    return item
});
console.log(newArray);*/

/*
every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。
some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。
some一直在找符合条件的值，一旦找到，则不会继续迭代下去。
every从迭代开始，一旦有一个不符合条件，则不会继续迭代下去
 */

/*let ages = [3, 10, 18, 20, 30];
let newAges = ages.some((item, index, array) => {
    console.log('item = ' + item + ', index = ' + index);
    return item > 10
});
console.log(newAges);*/

/*let _newAges = ages.every((item, index, array) => {
    console.log('item = ' + item + ', index = ' + index);
    return item > 18
});
console.log(_newAges);*/

/*
    forEach 是 ES5 中操作数组的一种方法，主要功能是遍历数组，其实说穿了，就是 for 循环的加强版，
    该语句需要一个回调函数，作为参数。
    回调函数的形参，依次为，value：遍历的数组内容；index：对应的数组索引，array：数组本身。
    不对未初始化的值进行任何操作
 */
// 分别对应：数组元素，元素的索引，数组本身
/*let eachArray = ['a', 'b', 'c'];
eachArray.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});*/

/*const arraySparse = [1, 3, , 7];
let numCallbackRuns = 0;

arraySparse.forEach(function (element) {
    console.log(element);
    numCallbackRuns++;
});

console.log("numCallbackRuns: ", numCallbackRuns);*/

/*
filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
 */
/*let agesFilter = [32, 33, 16, 40];
let newAgesFilter = agesFilter.find((item) => {
    return item > 30
});
console.log(newAgesFilter);*/

/*
find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
find() 方法为数组中的每个元素都调用一次函数执行：
    当数组中的元素在测试条件时返回 true 时, find() 返回符合条件的元素，之后的值不会再调用执行函数。
    如果没有符合条件的元素返回 undefined
findIndex() 方法返回传入一个测试条件（函数）符合条件的数组第一个元素位置。
findIndex() 方法为数组中的每个元素都调用一次函数执行：
    当数组中的元素在测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置，之后的值不会再调用执行函数。
    如果没有符合条件的元素返回 -1
 */
/*// fill() 方法用于将一个固定值替换数组的元素
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.fill("王福坤坤"));*/

/*let _fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(_fruits.fill("王福坤坤", 2, 3));
// .entries()返回数组的可迭代对象
let fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
fruitsArray.entries();*/
