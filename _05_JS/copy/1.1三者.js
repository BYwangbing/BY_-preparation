/**
 * @name 赋值
 */
const dataOne = {
    title: 'study',
    number: ['html', 'css', 'javascript'],
  };
  const dataTwo = dataOne;
  dataTwo.title = 'play';
  dataTwo.number = ['null'];
  console.log(dataOne);
  // dataOne: { title: 'play', number: ['null'] }
  console.log(dataTwo);
  // dataTwo: { title: 'play', number: ['null'] }
  

  /**
   * @name 浅拷贝
   */

  const dataThree = {
    title: 'study',
    number: ['html', 'css', 'javascript'],
  };
  const dataFour = shallowClone(dataThree); // shallowClone 待实现
  dataFour.title = 'play';
  dataFour.number = ['null'];
  console.log(dataThree);
  // dataThree: { title: 'study', number: ['null'] }
  console.log(dataFour);
  // dataFour: { title: 'play', number: ['null'] }
  

  /**
   * @name 深拷贝
   */

  const dataFive = {
    title: 'study',
    number: ['html', 'css', 'javascript'],
  };

  const dataSix = deepClone(dataFive); // deepClone 待实现
  dataSix.title = 'play';
  dataSix.number = ['null'];
  console.log(dataFive);
  // dataFive: { title: 'study', number: ['html', 'css', 'javascript'] }
  console.log(dataSix);
  // dataSix: { title: 'play', number: ['null'] }

/*
赋值：引用地址的拷贝。修改赋值后的数据，不管是基本数据类型还是引用数据类型，都会影响到原数据。

浅拷贝：一层拷贝。在浅拷贝中，修改基本数据类型不会影响原有数据的基本数据类型，修改引用数据类型会影响原有的数据类型。

深拷贝：无限层级拷贝。在深拷贝中，修改基本数据类型和引用数据类型都不会影响原有的数据类型。*/
