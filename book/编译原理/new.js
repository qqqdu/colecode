function myNew(fn) {
  const obj = {}
  obj.__proto__ = fn.prototype
  fn.call(obj)
  return obj
}
const fn = function() {
  console.log('lala')
}
const fn2 = function() {}
const res = myNew(fn)
console.log(res instanceof fn)

function instanceofFn(left, right) {
  if(left == null || left == undefined) {
    return false
  }
  if(left.__proto__ === right.prototype) {
    return true
  } else {
    return instanceofFn(left.__proto__, right)
  }
}
const res1 = instanceofFn(res, fn2)
console.log(res1, res instanceof fn2)
