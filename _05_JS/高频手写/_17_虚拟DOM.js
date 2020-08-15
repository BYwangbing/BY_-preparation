/*——先将虚拟DOM的三个属性定义出来：type、props、children——*/

/*
*   @params: {String} type      标签元素的类型,也就是标签名称
*   @params: {Object} props     标签元素设置的属性
*   @params: {Array}  children  标签元素的子节点
*/
function VirtualDOM(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
}

/*
*  创建虚拟DOM的方法
*  @method create
*  @return {VirtualDOM} 返回创建出来的虚拟DOM对象
*/
function create(type, props, children) {
    return new VirtualDOM(type, props, children);
}
