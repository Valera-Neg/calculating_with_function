 const numOrFunc = (num, func) => {
  if (!func){
    return num;
  } else {
    return func(num);
  } 
}

const zero = func => numOrFunc(0, func)
const one = func => numOrFunc(1, func)
const two = func => numOrFunc(2, func)
const three = func => numOrFunc(3, func)
const four = func => numOrFunc(4, func)
const five = func => numOrFunc(5, func)
const six = func => numOrFunc(6, func)
const seven = func => numOrFunc(7, func)
const eight = func => numOrFunc(8, func)
const nine = func => numOrFunc(9, func)

const plus = r => (l) => l + r;
const minus = r => (l) => l -r;
const times = r => (l) => l * r;
const dividedBy = r => (l) => Math.floor(l/r);




console.log(seven(times(five()))) //> 35
console.log(four(plus(nine()))) //> 13
console.log(eight(minus(three()))) //> 5
console.log(six(dividedBy(two()))) //> 3