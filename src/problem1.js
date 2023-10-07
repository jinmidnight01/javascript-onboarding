function problem1(pobi, crong) {
  var answer;

  if (pobi[1] !== pobi[0]+1 || crong[1] !== crong[0]+1) {
    return -1;
  }

  // pobi
  let pobi_left = Math.max(String(pobi[0]).split('').map(Number).reduce((a,b)=>a*b),
      String(pobi[0]).split('').map(Number).reduce((a,b)=>a+b));
  let pobi_right = Math.max(String(pobi[1]).split('').map(Number).reduce((a,b)=>a*b),
      String(pobi[1]).split('').map(Number).reduce((a,b)=>a+b));
  let pobi_answer = Math.max(pobi_left, pobi_right);

  // crong
  let crong_left = Math.max(String(crong[0]).split('').map(Number).reduce((a,b)=>a*b),
      String(crong[0]).split('').map(Number).reduce((a,b)=>a+b));
  let crong_right = Math.max(String(crong[1]).split('').map(Number).reduce((a,b)=>a*b),
      String(crong[1]).split('').map(Number).reduce((a,b)=>a+b));
  let crong_answer = Math.max(crong_left, crong_right);

  if (pobi_answer > crong_answer) answer = 1;
  else if (pobi_answer < crong_answer) answer = 2;
  else if (pobi_answer === crong_answer) answer = 0;

  return answer;
}

module.exports = problem1;