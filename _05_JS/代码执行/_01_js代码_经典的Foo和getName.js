function Foo() {
    getName = function () {
        console.log(1);
    };
    return this;
}

Foo.getName = function () {
    console.log(2);
};
Foo.prototype.getName = function () {
    console.log(3);
};
var getName = function () {
    console.log(4);
};

function getName() {
    console.log(5);
}
//请写出以下输出结果：
Foo.getName();                        // 2
// 查看Foo的静态属性自调用，自然就是2
getName();                            // 4
// 提升后的代码变量声明的getName，将之前函数声明的getName覆盖，结果是4
Foo().getName();                      // 1
// 此处考察了两个知识点，一个是变量作用域问题，一个是this指向问题
/*第三问的 Foo().getName(); 先执行了Foo函数，然后调用Foo函数的返回值对象的getName属性函数
执行Foo()，返回this，this指向undefined，由于非严格模式所以this指向window，window.getName()*/
/*Foo函数的第一句  getName = function () { alert (1); };
是一句函数赋值语句，注意它没有var声明，所以先向当前Foo函数作用域内寻找getName变量，没有。
再向当前函数作用域上层，即外层作用域内寻找是否含有getName变量，
找到了，也就是第二问中的alert(4)函数，将此变量的值赋值为 function(){alert(1)}*/
// 此处实际上是将外层作用域内的getName函数修改了
/*注意：此处若依然没有找到会一直向上查找到window对象，
若window对象中也没有getName属性，就在window对象中创建一个getName变量*/
// 之后Foo函数的返回值是this this的指向是由所在函数的调用方式决定的。而此处的直接调用方式，this指向window对象
/*Foo函数返回的是window对象，相当于执行 window.getName()
而window中的getName已经被修改为alert(1)，所以最终会输出1*/
getName();                            // 1
// 同样window.getName() 此时的getName在上一步已经覆盖赋值，所以执行结果为1
new Foo.getName();                    // 2
// 点（.）的优先级高于new操作 ==> new (Foo.getName)() ==> 实际上将getName函数作为了构造函数来执行
/**
 * 将其拆解，相当于
 * a = Foo.getName;
 * new a();
 * 故输出2
 */
new Foo().getName();           		  // 3  ==> 先执行new Foo()，再执行getName
/*运算符优先级括号高于new，实际执行为 ==> (new Foo()).getName() 遂先执行Foo函数，而Foo此时作为构造函数却有返回值
new...(...)优先级与点“.”、函数自调用优先级相同所以从左至右执行 ((new Foo()).getName)()*/

/* 构造函数的返回值
*   在传统语言中，构造函数不应该有返回值，实际执行的返回值就是此构造函数的实例化对象 而在js中构造函数可以有返回值也可以没有
*       1、没有返回值则按照其他语言一样返回实例化对象。
*       2、若有返回值则检查其返回值是否为引用类型。
*           如果是非引用类型，如基本类型（string,number,boolean,null,undefined）则与无返回值相同，实际返回其实例化对象
*       3、若返回值是引用类型，则实际返回值为这个引用类型
*   原题中，返回的是this，而this在构造函数中本来就代表当前实例化对象，遂最终Foo函数返回实例化对象
* */
// new Foo()实例化了构造函数Foo 返回this为自身的这个构造函数，然而自身并没有getName这个属性
// 此时会找原型prototype，从而输出3----------------此时考察原型，实例，构造函数的关系
new new Foo().getName();			  // 3  ==> 先执行new Foo()，然后getName，最后执行前面的new
// 同样是运算符优先级问题： ==>  new ((new Foo()).getName)()
//                              new ((new Foo()).getName())
// 先初始化Foo的实例化对象，然后将其原型上的getName函数作为构造函数再次new
/*第一步得到一个实例对象，this指向该实例对象
第二步执行该实例对象prototype上的getName方法
第三步new出来得到一个空属性的实例，最后输出3*/

/*
function Foo() {
    getName = function () {
        alert(1);
    };
    return this;
}

var getName;                             //  变更   //变量声明提升
function getName() {
    alert(5);
}         // 变更 //函数声明提升到顶部 提升函数声明，覆盖var的声明
Foo.getName = function () {
    alert(2);
};
Foo.prototype.getName = function () {
    alert(3);
};
getName = function () {
    alert(4);
};     // ----------变更 变量赋值依然保留在原来的位置 最终的赋值再次覆盖function getName声明
*/

// 会将声明提前到最顶部 而赋值依然会停留在原地

// 当两者同时出现时，函数声明会被提升到最前面，然后再是变量提升