/*
*   @params: {String} type      标签元素的类型,也就是标签名称
*   @params: {Object} props     标签元素设置的属性
*   @params: {Array}  children  标签元素的子节点
*/
function VirtualDOM(type, props, children) {
    this.type = type;
    this.props = props || {};
    this.children = children || [];
}

/*
*  创建虚拟DOM的方法
*  @method create
*  @return {VirtualDOM} 返回创建出来的虚拟DOM对象
*/
function create(type, props, children) {
    return new VirtualDOM(type, props, children)
}

let vDom = create('div', {'class': 'content'}, [
    create('h3', {}, ['内容']),
    create('ul', {'style': 'list-style-type: none;border: 1px solid;padding: 20px;'}, [
        create('li', {}, ['选项一']),
        create('li', {}, ['选项二'])
    ])
]);

/*根据type属性创建节点*/

/*
*   将虚拟节点转化为真实的DOM节点并返回
*   @method render
*   @params {VirtualDOM}  vdom    虚拟DOM对象
*   @return {HMTLElement} element 返回真实的DOM节点
*/
function render(vdom) {
    var type = vdom.type;
    var props = vdom.props;
    var children = vdom.children;
    // 根据type属性创建节点
    var element = document.createElement(type);
    // 设置属性
    setProps(element, props);
    // 设置子节点
    children.forEach(child => {
        // 子节点是虚拟VirtualDOM的实例 递归创建节点、设置属性
        let childEle;
        if (child instanceof VirtualDOM) {
            childEle = render(child);
        } else {
            // 子节点是文本
            childEle = document.createTextNode(child);
        }
        // 添加子节点到父节点中
        element.appendChild(childEle);
    });
    return element;
}

/*设置节点属性*/

/*
*   为DOM节点设置属性
*   @method setProps
*   @params {HTMLElement} element  dom元素
*   @params {Object}      props    元素的属性
*/
function setProps(element, props) {
    for (var key in props) {
        element.setAttribute(key, props[key]);
    }
}

// 将虚拟DOM转化为真实DOM
let realDom = render(vDom);

// 将真实DOM插入body元素中
document.body.appendChild(realDom);