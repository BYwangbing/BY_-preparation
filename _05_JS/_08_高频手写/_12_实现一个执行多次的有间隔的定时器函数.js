function repeat(func, times, wait) {
  return function (content) {
    let timer = setInterval(function () {
      func.apply(null, content);
      --times || clearInterval(timer);
    }, wait);
  };
}

const repeatFunc = repeat(console.log, 4, 3000);
repeatFunc('helloworld'); //会输出四次helloworld，每次间隔3s

function print(N, delay) {
  for (let i = 0; i < N; i++) {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay * i);
    }).then(() => {
      console.log('hello world');
    });
  }
}

print(4, 3000);
