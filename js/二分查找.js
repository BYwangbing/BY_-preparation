function search(array, low, high, target) {
    if (low > high) {return -1;}
    let temp = Math.floor((low + high) / 2);
    if (target < array[temp]) {
        return search(array, low, temp - 1, target);
    } else if (target > array[temp]) {
        return search(array, temp + 1, high, target);
    }else {
        return temp;
    }
}