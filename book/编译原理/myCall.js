Function.prototype.myCall = function (...arg) {
  // 函数
  const fn = this
  // 调用方
  const obj = arg.shift()
  // obj.__proto__ = fn.prototype
  obj.fn = fn
  return obj.fn(...arg)
  // const res = fn(...arg)
  // // return new fn(arg)
  // // that(arguments)
  // console.log(res)
}
Function.prototype.myApply = function (...arg) {
  // 函数
  const fn = this
  // 调用方
  const obj = arg.shift()
  // obj.__proto__ = fn.prototype
  obj.fn = fn
  return obj.fn(...arg)
  // const res = fn(...arg)
  // // return new fn(arg)
  // // that(arguments)
  // console.log(res)
}
function fn(arg) {
  console.log(this.name, arg)
}

Function.prototype.myBind= function (...arg) {
  // 函数
  const fn = this
  // 调用方
  const obj = arg.shift()
  // obj.__proto__ = fn.prototype
  obj.fn = fn
  return function() {
    obj.fn(...arg)
  }
  // const res = fn(...arg)
  // // return new fn(arg)
  // // that(arguments)
  // console.log(res)
}
function fn(arg) {
  console.log(this.name, arg)
}
const res = fn.myBind({
  name: 'lala'
}, [2,3,4])
console.log(res)
res()