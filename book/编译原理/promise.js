const PADDING = 'padding'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'
class dPromise {
  constructor(callback) {
    const that = this
    this.state = PADDING
    this.value = null
    this.rejectCallback = []
    this.resolvedCallback = []
    function resolved(arg) {
      console.log('resolved', arg)
      if(that.state === PADDING) {
        that.state = RESOLVED
        that.resolvedCallback.map(res => res(that.value))
        that.value = arg
      }
    }
    function rejected(arg) {
      console.log('rejected')
      that.value = arg
      if(that.state === PADDING) {
        that.state = REJECTED
        that.rejectCallback.map(rej => rej(that.value))
      }
    }
    try {
      callback(resolved, rejected)
    } catch(e) {
      rejected(e)
    }
  }
  then(onResolve, onReject) {
    console.log(this.state, 'then')
    if(this.state === PADDING) {
      console.log(this.state, 'then')
      this.resolvedCallback.push(onResolve)
      this.rejectCallback.push(onReject)
      return this
    }
    if(this.state = REJECTED) {
      onReject(this.value)
      return this
    }
    if(this.state = RESOLVED) {
      onResolve(this.value)
      return this
    }
    return this
  }
  catch(onReject) {
    if(this.state === PADDING) {
      console.log(this.state, 'catch')
      this.rejectCallback.push(onReject)
      return this
    }
    if(this.state = REJECTED) {
      onReject(this.value)
      return this
    }
    return this
  }
  finally(onFinally) {
    if(this.state === PADDING) {
      this.rejectCallback.push(onFinally)
      this.resolvedCallback.push(onFinally)
    }
    // onFinally()
  }
}

new dPromise((resolved, reject) => {
  setTimeout(() => {
    console.log('执行')
    console.log(resolved)
    reject && reject(2)
  }, 1000)
}).then((arg) => {
  console.log('then，回调')
  console.log(arg)
}, () => {
  console.log('on reject 回调')
}).catch(() => {
  console.log('catch')
}).finally(() => {
  console.log('finally')
})
// new Promise((resolve, reject) => {
//   if(true) {
//     reject(true)
//   }
// }).then(() => {
//   console.log('then')
// }, (j) => {
//   console.log('rejects', '', j)
// }).catch(() => {
//   console.log('catch')
// }).finally((e) => {
//   console.log('finally', e)
// })