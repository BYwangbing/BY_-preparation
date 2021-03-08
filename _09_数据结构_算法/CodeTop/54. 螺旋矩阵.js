/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length || !matrix[0].length) return [];
  // 右 下 左 上 对应0 1 2 3 四个指针 对应上下左右的边界
  let top = 0,
    left = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1;
  let isEnd = false;
  let dire = 0;
  let i = 0,
    j = 0;
  let result = [];

  const move = () => {
    switch (dire % 4) {
      case 0: {
        moveRight();
        turnDown();
        break;
      }
      case 1: {
        moveDown();
        turnLeft();
        break;
      }
      case 2: {
        moveLeft();
        turnTop();
        break;
      }
      case 3: {
        moveTop();
        turnRight();
        break;
      }
      default:
        break;
    }
  };

  const moveRight = () => {
    while (j <= right) {
      result.push(matrix[i][j]);
      j++;
    }
    j--;
    top++;
  };

  const moveDown = () => {
    while (i <= bottom) {
      result.push(matrix[i][j]);
      i++;
    }
    i--;
    right--;
  };

  const moveTop = () => {
    while (i >= top) {
      result.push(matrix[i][j]);
      i--;
    }
    i++;
    left++;
  };

  const moveLeft = () => {
    while (j >= left) {
      result.push(matrix[i][j]);
      j--;
    }
    j++;
    bottom--;
  };

  const turnRight = () => {
    dire++;
    j++;
    if (j > right) {
      isEnd = true;
    }
  };

  const turnDown = () => {
    dire++;
    i++;
    if (i > bottom) {
      isEnd = true;
    }
  };

  const turnLeft = () => {
    dire++;
    j--;
    if (j < left) {
      isEnd = true;
    }
  };

  const turnTop = () => {
    dire++;
    i--;
    if (i < top) {
      isEnd = true;
    }
  };

  while (!isEnd) {
    move();
  }

  return result;
};

/*
先右再下再左再上
let top = 0,left = 0, right = matrix[0].length-1, bottom = matrix.length - 1;

所以设定一个dire值，用来表示当前的行进方向，每行进结束加1，同时在控制逻辑里用dire%4的方式来控制行进逻辑。
isEnd表示是否已经无路可走，i,j表示当前位置，result表示结果集。
move就是前进方法，他判断dire来决定向哪边走，每次走完就缩小边界，同时转向

*/
