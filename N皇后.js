// 记录防止的坐标 row_col
var result = []; 

var solveNQueens = function (n) {
  result = []; // 清空结果

  var board = []; // 生成棋盘
  for(var i = 0; i < n; i++){
    var boardRow = [];
    for(var j = 0; j < n; j++){
      boardRow.push('.');
    }
    board.push(boardRow);
  }

  backtrack(board, 0);
  return result;
};

function backtrack(board, row){
  if(row === board.length){
    result.push(board.map(item => item.join('')));
    return;
  }
  for(var col = 0; col < board.length; col++){
    if(!isVaild(board, row, col)){
      continue;
    }
    board[row][col] = 'Q';
    backtrack(board, row + 1);
    board[row][col] = '.';
  }
}

// 判断是否可以放置
function isVaild(board, row, col){
  const n = board.length;

  for(let i = 0; i < n; i++){
    if(board[i][col] === 'Q'){
      return false
    }
  }

  for(let i = row - 1, j = col + 1; i >= 0 && j  < n; i--, j++){
    if(board[i][j] === 'Q'){
      return false
    }
  }

  for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--){
    if(board[i][j] === 'Q'){
      return false
    }
  }

  return true;
}

const res = solveNQueens(4)
console.log(res);