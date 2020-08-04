var lodash = require('lodash');

const obj1 = [1, 'Hello!', {name: 'html'}, [{name: 'css',}]];
const obj2 = lodash.cloneDeep(obj1);
obj2[0] = 2;
obj2[1] = 'Hi!';
obj2[2].name = 'lodash';
obj2[3][0].name = 'js';

console.log(obj1);
console.log(obj2);
