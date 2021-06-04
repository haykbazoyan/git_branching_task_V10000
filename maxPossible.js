function maxPossible(mainNum, num2) {
  let result = [];
  let num1Str = String(mainNum).split("");
  let num2Str = String(num2).split("");
  let mainLength = num1Str.length; //4

  let sortNum = num2Str.sort((a, b) => b - a);

  for (let i = 0; i < mainLength; i++) {
    if (Number(num1Str[0]) < Number(sortNum[i])) {
      result.push(sortNum[i]);
      num1Str.shift();
    } else if (Number(num1Str[0]) > Number(sortNum[i])) {
      result.push(num1Str[0], sortNum[i]);
      num1Str.shift();
    }
    if (result.length === mainLength) {
      break;
    }
  }

  if (result.length < mainLength) {
    result.push(...num1Str);
  }

  result = Number(result.join(""));

  return result;
}

let num1 = 523;
let num2 = 76;
console.log(maxPossible(num1, num2));
