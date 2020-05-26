var locationList = [
    { id: 0, name: "中国" },
    { id: 1, pid: 0, name: "广东省" }, 
    { id: 2, pid: 1, name: "深圳市" }, 
    { id: 3, pid: 1, name: "广州市" }
  ]
  function buildLocationTree(list) {
    let temp = {};
    let tree = {};
    // 临时hash储存 id 和 树节点的关系
    for(let i in list){
        temp[list[i].id] = list[i];
    }
    // console.log(temp)
    for(let i in temp){
        // console.log(temp[i])
        // 如果有父节点
        // console.log(temp[i].pid)
      
        if(typeof temp[i].pid === 'number') {
          console.log(temp, temp[i].pid)
          // 父节点没有子节点的情况，创建空数组
            if(!temp[temp[i].pid].subLocations) {
                temp[temp[i].pid].subLocations = []
            }
            // 赋值给父节点
            // temp[temp[i].pid].subLocations[temp[i].id] = temp[i];
            temp[temp[i].pid].subLocations.push(temp[i]);
            
        // 没有父节点时，保存，即顶点
        } else {
            tree = temp[i];
        }
    }
    return tree
  }
  var locationTree = buildLocationTree(locationList); 


//   /**
//    * 排序
//    * 快速排序，分而治之。
//    * 
//    */
//   // quickSort(arr, i, j)
//   /**
//    * 
//    * @param {*} arr 
//    * @param {*} i 开始项
//    * @param {*} j 总长度
//    */
//   function quickSort(arr, i, j) {
//     if(i < j) {
//       let left = i;
//       let right = j;
//       let pivot = arr[left.timestamp];
//       while(i < j) {
//         while(arr[j].timestamp >= pivot && i < j) {  // 从后往前找比基准小的数
//           j--;
//         }
//         if(i < j) {
//           arr[i++].timestamp = arr[j];
//         }
//         while(arr[i].timestamp <= pivot && i < j) {  // 从前往后找比基准大的数
//           i++;
//         }
//         if(i < j) {
//           arr[j--] = arr[i];
//         }
//       }
//       arr[i] = pivot;
//       // 递归
//       // 排中间数之前的
//       quickSort(arr, left, i-1);
//       // 排中间数之后的
//       quickSort(arr, i+1, right);
//       return arr;
//     }
//   }
//   // 递归恐怕不行，数据量太大，容易爆栈......考虑循环，时间不够了，这里可以用快速排序的循环写法，而非递归。



// /**
//  * 
//  */

// // var cookie = ‘PHPSESSID=0kvneb776baqhf58o2tm2c94e5; pgv_pvi=9051466752; pgv_si=s7186281472; qcloud_visitId=a4855986717854a66aa83f24d3354709; qcloud_uid=6d95ce375053a1b31d00fce7af9ba02c; pv_uid=257127f177879f702fe6ef94b9d76cb2;pv_land=http%3A%2F%2Fpassport.qcloud.com%2Findex.php ; _ga=GA1.2.516642758.1463555939;monitorouin=1e19%2BwNnG39Skt0uEiG%2FuMZCqIknLcLH6qt0aj0x ngVjhx7jWWVKewYVkBnbC0PmF4I;monitorappid=8af3cU8qz4kqPoYzLCGRXhLcHpW2w%2BACTZuwj aw%2Fh2PMUBz0yIgdTMG5S5guq7qSygo;ptui_loginuin=3052202501%20;pt2gguin=o3052202501;uin=o3 052202501;ptisp=ctc;ptcz=9aa1cf3992c8ed2b581f04d51333f0f0b79adfc74e494daa5ad73703d16f93ff;userinfo =reg%3D1%26un%3Dpolo;nodesess=s%3AO2gAWpD7S4wN9gAu2rYM2Xvf.wq26bg5tscM%2F3X9FEpx8 6K0rzF5w%2BbDRetkKugR19I0; nick=polo; appid=1251000011; moduleId=1251000011; ownerUin=2407912486; regionId=1’  

// let uin = ''
// function tirm(str) {
//   return str.replace(/(^\s*)|(\s*$)/g, "");  
// }
// cookie.split(';').map((val) => {
//   // 去除首位空格和小写 再匹配
//   if(tirm(val.split('=')[0]).toLocaleLowerCase() === 'uin') {
//       uin = val.split('=')[1]
//   }
// })