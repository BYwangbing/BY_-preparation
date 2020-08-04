let getFun = (str) => {
    return 'aa'
};
class Bb {
    constructor () {
        getFun = (str) => {
            return 'bb'
        }
    }
    getA = getFun('a')
}
var bb = new Bb();
bb.getA;
