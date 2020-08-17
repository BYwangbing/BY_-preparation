/*
* 确保只有一个实例 可以全局访问
* 适用：适用于弹框的实现, 全局缓存
* */

// 单例模式实现一
function SingleTon(name) {
    this.name = name;
    this.instance = null;
}

SingleTon.prototype.getName = function () {
    return this.name;
};
SingleTon.getInstance = function (name) {
    if (this.instance) {
        return this.instance;
    }
    return new SingleTon(name);
};
