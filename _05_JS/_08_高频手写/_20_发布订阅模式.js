class Emitter {
    constructor() {
        this._listener = [];
    }

    // 订阅 监听事件
    on(type, fn) {
        // 判断_listener数组中是否存在该事件命
        // 存在将回调push到事件名对应的value数组中，不存在直接新增
        this._listener[type] ? this._listener[type].push(fn) : (this._listener[type] = fn);
    }

    // 发布 触发事件
    trigger(type, ...rest) {
        if (!this._listener[type]) {
            return false;
        }
        this._listener[type].forEach(callback => callback(...rest));
    }
}

class sub extends Emitter{
    constructor() {
        super();
    }
}