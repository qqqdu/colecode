/**
 * 有一串 s，需要在 s 找出 它的字串 b 的位置
 * absdfsafsdfsfd
 * saf
 */
// function KMPfind(s, b) {
//   const reg = new RegExp(b)
//   return s.match(reg, b)['index']
// }


function checkBstring(s, b) {
  console.log('check',s ,b)
  let i = 0
  while(i <= b.length - 1) {
    console.log('battle', i)
    if(s[i] !== b[i]) {
      return false
    }
    i++
  }
  return true
}
// 主串 子串 主串位置 字串位置
function render(s, b, nowS, nowB) {
  console.log(s, b)
  let sStr = ''
  for(let i = 0; i < s.length; i++) {
    let fill = ''
    if (nowS === i) {
      fill = 'background: red;'
    }

    sStr += `<div style='left: ${42 * i}px;${fill}'>${s[i]}</div>`
  }
  document.getElementById('str_s').innerHTML = sStr
  let bStr = ''
  for(let j = 0; j < b.length; j++) {
    let fill = ''
    if(nowB === j) {
      fill = 'background: red;'
    }
    bStr += `<div style='left: ${42 * j};${fill}'>${b[j]}</div>`
  }
  document.getElementById('str_b').innerHTML = bStr

}
async function KMPfind(s, b) {
  let i = 0, j = 0, index = 0
  while(i <= s.length - 1) {
    render(s, b, i, j)
    if(s[i] === b[j]) {
      if(j === b.length - 1) {
        return index
      }
      i++
      j++
    // 匹配失败
    } else {
      i++
      j = 0
      index = i
    }
    await sleep()
  }
  return -1
}
function sleep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 1000)
  })
}
console.time()
// for(let i = 0; i < 20000; i++) {
  const res = KMPfind('absdfsafsdfsfdsafg', 'dfs')
  console.log(res)
// }
console.timeEnd()





// const downloadFile = (url) => {
//   const iframe = document.createElement('iframe')
//   iframe.style.display = 'none' // 防止影响页面
//   iframe.style.height = 0 // 防止影响页面
//   iframe.src = url
//   document.body.appendChild(iframe) // 这一行必须，iframe挂在到dom树上才会发请求
//   // 5分钟之后删除（onload方法对于下载链接不起作用，就先抠脚一下吧）
//   setTimeout(() => {
//     iframe.remove()
//   }, 5 * 60 * 1000)
// }