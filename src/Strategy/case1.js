// 策略模式-计算奖金
const strategies = {
  "S": (salary) => {
    return salary * 4
  },
  "A": (salary) => {
    return salary * 3
  },
  "B": (salary) => {
    return salary * 2
  },
  "C": (salary) => {
    return salary * 1
  }
}

const calculateBonus = (level, salary) => {
  return strategies[level](salary)
}

console.log(calculateBonus('S', 2000))
console.log(calculateBonus('A', 1000))

switch (key) {
  case value:
    break;
  case value:
    break;
}