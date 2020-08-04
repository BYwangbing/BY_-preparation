// Object.assign() 方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。

const obj = {
    name : "张三",
    age : "16",
    skill : {
        read : "html",
        write : "css"

    },
    like : ['吃饭','睡觉','敲代码']
};

const newObj = Object.assign({},obj);

newObj.name = "李四";
newObj.skill.read = "js";
newObj.like = ["玩耍"];

console.log(obj);
console.log(newObj);



// 可以看到的是，Object.assign() 对于第一层的数据来说，是深拷贝，对于第二层及以上的数据来说，是浅拷贝。