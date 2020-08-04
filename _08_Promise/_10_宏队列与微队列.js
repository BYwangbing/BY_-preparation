setTimeout(() => {
    Promise.resolve(1).then(
        value => {
            console.log('Third Promise onResolved: ', value);
        }
    );
    console.log('First setTimeout callback');
}, 0);
setTimeout(() => {
    console.log('Second setTimeout callback');
}, 0);
Promise.resolve(1).then(
    value => {
        console.log('First Promise onResolved: ', value);
    }
);
Promise.resolve(2).then(
    value => {
        console.log('Second Promise onResolved: ', value);
    }
);