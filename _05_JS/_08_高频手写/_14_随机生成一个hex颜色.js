const getHex = () => {
    const length = Math.random() > 0.5 ? 6 : 3;
    let res = "#";
    const hash = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    for (let i = 0; i < length; i++) {
        res += hash[Math.floor(Math.random() * 16)];
    }
    return res.toUpperCase();
};
console.log(getHex());