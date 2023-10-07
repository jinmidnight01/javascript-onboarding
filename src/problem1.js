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

module.exports = problem1;