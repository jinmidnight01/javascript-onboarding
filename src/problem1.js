function problem1(pobi, crong) {
  var answer;
  return answer;
}

// 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다
function findLargerValue(pageNum) {
  let multiplyPageNum = String(pageNum[0]).split('').map(Number).reduce((a,b)=>a*b);
  let plusPageNum = String(pageNum[0]).split('').map(Number).reduce((a,b)=>a+b);
  return Math.max(multiplyPageNum, plusPageNum);
}

// 왼쪽 페이지로 연산한 큰 수와 오른쪽 페이지로 연산한 큰 수 중 더 큰 수를 구한다
function compareLeftRight(leftValue, rightValue) {
  return Math.max(leftValue, rightValue);
}

module.exports = problem1;