/*——统计数组中相同项的个数——*/
let cars = ['BMW', 'Benz', 'Benz', 'Tesla', 'BMW', 'Toyota'];
let carsObj = cars.reduce((obj, name) => {
    obj[name] = obj[name] ? ++obj[name] : 1;
    return obj;
}, {});
carsObj; // => { BMW: 2, Benz: 2, Tesla: 1, Toyota: 1 }