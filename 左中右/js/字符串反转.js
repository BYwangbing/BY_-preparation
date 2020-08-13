const reverse = (str) => {
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        console.log(str[str.length - 1 - i]);
        // [str[i], str[str.length - 1 - i]] = [str[str.length - 1 - i], str[i]]
        const item = str[i];
        str[i] = str[str.length - 1 - i];
        str[str.length - 1 - i] = item
    }
    return str;
};
console.log(reverse('asdf'));