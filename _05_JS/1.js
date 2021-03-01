let getFun = (str) => {
    return 'aa'
};
class Bb {
    constructor() {
        getFun = (str) => {
            return 'bb'
        }
    }
    getA = getFun('a')
}
var bb = new Bb();
bb.getA;

let header = document.querySelector('header')

let beforeStyle = window.getComputedStyle(header, ":before");

console.log(beforeStyle.backgroundImage);

let urlImage = 'G:\桌面文件夹\ssn\aa\图片\壁纸\1.jpg'

document.querySelector('header').style.backgroundImage = "url(" + urlImage + ")";

let currentUrl = 'https://b3logfile.com/bing/20200919.jpg?imageView2/1/w/960/h/540/interlace/1/q/100'

document.styleSheets[0].addRule('.header--index:before', 'background:url(' + currentUrl + ') no-repeat 50%');

document.styleSheets[0].insertRule('.header--index:before{background:url(' + currentUrl + ') no-repeat 50%', 0);
