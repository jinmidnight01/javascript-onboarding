function problem1(pobi, crong) {
  var answer;
  return answer;
}

// 페이지 번호의 각 자리 숫자를 모두 더하거나, 모두 곱해 가장 큰 수를 구한다
function findLargerValue(pageNum) {
  let multiplyPageNum = String(pageNum).split('').map(Number).reduce((a,b)=>a*b);
  let plusPageNum = String(pageNum).split('').map(Number).reduce((a,b)=>a+b);
  return Math.max(multiplyPageNum, plusPageNum);
}

// 왼쪽 페이지로 연산한 큰 수와 오른쪽 페이지로 연산한 큰 수 중 더 큰 수를 구한다
function compareLeftRight(leftValue, rightValue) {
  return Math.max(leftValue, rightValue);
}

// 포비와 크롱의 점수에 따라 숫자 return
function output(pobiScore, crongScore) {
  if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else if (pobiScore === crongScore) return 0;
}

module.exports = problem1;