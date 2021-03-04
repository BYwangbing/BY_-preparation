const judgeArr = (A, B) => {
  let len1 = A.length;
  let len2 = B.length;
  if (len1 === len2) {
    // 1 2 3   1 2 3
    A.concat(B);
    if (new Set(A).length === len1) return 0;
  } else if (len1 > len2) {
    // 1 2 3 4    1 2 3
    A.concat(B);
    if (new Set(A).length === len1) return 2;
  } else {
    // 1 2 3     1 2 3 4
    B.concat(A);
    if (new Set(B).length === len2) return 1;
  }
  return -1;
};

let A = [1, 2, 2],
  B = [1, 2, 2];

console.log(judgeArr(A, B)); // 有问题
