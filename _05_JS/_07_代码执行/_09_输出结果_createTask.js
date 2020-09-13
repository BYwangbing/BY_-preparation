function createTask(ms) {
    return () => {
        console.log('start', ms);
        return new Promise(resolve => setTimeout(() => {
            console.log('end', ms);
            resolve(ms);
        }, ms))
    }
}

const tasks = Array(5).fill(null).map((_, i) => createTask(i * 1000));
Promise.all(tasks.map(task => task())).then(console.log);


Promise
    .resolve('a')
    .then('b')
    .then(Promise.resolve('c'))
    .then(console.log);