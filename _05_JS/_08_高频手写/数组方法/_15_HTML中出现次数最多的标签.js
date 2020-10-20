const html = document.querySelector("html");
const htmlChild = html.children;
const obj = {};

function fn(children) {
    for (let item of children) {
        if (obj.hasOwnProperty(item.tagName)) {
            obj[item.tagName] = obj[item.tagName] + 1;
        } else {
            obj[item.tagName] = 1;
        }
        const children = item.children;
        if (children.length !== 0) {
            fn(children);
        }
    }
}

fn(htmlChild);
const tag = Object.entries(obj).sort((a, b) => a - b);
console.log(tag);