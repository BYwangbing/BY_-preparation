/*/!*setTimeout实现*!/
function changeColor(color) {
    console.log('traffic-light ', color);
}

function main() {
    changeColor('red');
    setTimeout(() => {
        changeColor('yellow');
        setTimeout(() => {
            changeColor('green');
            setTimeout(main, 2000);
        }, 1000)
    }, 2000)
}

main();*/

/*async await 实现*/
function sleep(duration) {
    return new Promise((resolve, reject) => setTimeout(resolve, duration))
}

async function $changeColor(color, duration) {
    console.log('traffic-light ', color);
    await sleep(duration);
}

async function $main() {
    while (1) {
        await $changeColor('red', 3000);
        await $changeColor('green', 1000);
        await $changeColor('yellow', 2000);
    }
}

$main();