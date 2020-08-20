/*
* 数组中任意找一个数，它的左边都小于它，它的下边都大于它。
* 如果要找的数（target）大于这个数，那就向下找；小于这个数就向左找。
* */
function find(target, array) {
    /*选取右上角的数为初始判断点*/
    let row = array.length, col = array[0].length,
        i = 0, j = col - 1;
    while (i < row && j >= 0) {
        if (array[i][j] > target) {
            j--;
        } else if (array[i][j] < target) {
            i++;
        } else {
            return true
        }
    }
    return false;
}
/*——选取左下角的数为初始判断点——*/