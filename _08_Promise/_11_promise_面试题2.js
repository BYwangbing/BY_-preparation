setTimeout(() => {
    console.log(1)
}, 0);
new Promise((resolve) => {
    console.log(2);
    resolve();
    console.log(6);
}).then(() => {
    console.log(3)
}).then(() => {
    console.log(4)
});
console.log(5);