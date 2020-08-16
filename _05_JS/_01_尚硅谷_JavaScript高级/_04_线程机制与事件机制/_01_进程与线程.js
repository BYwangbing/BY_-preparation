// 相等 ==
// console.log(NaN == !NaN);
// console.log(null == null);
// console.log(undefined == undefined);
// console.log('1', null == undefined);
// console.log([] == ![]);
// console.log({} == {});
// console.log(!!'');
// console.log(0 == '');
// console.log([] == false);
//通过FormData构造函数创建一个空对象
var formdata = new FormData();
//可以通过append()方法来追加数据
formdata.append("name", "laotie");
formdata.append("name", "王岩若");
formdata.append("k1", "v1");
formdata.append("k1", "v2");
formdata.append("k1", "v3");
// console.log(formdata);
// //通过get方法对值进行读取
console.log(formdata.get("name"));//laotie
// //通过set方法对值进行设置
// formdata.set("name", "laoliu");
console.log(formdata.get("k1"));//laoliu