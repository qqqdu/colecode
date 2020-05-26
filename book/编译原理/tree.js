function Node(data, left, right) {
  this.left = left
  this.data = data
  this.right = right
}
class BST {
  constructor() {
    this.root = null
  }
  insertNode(data) {
    const node = new Node(data, null, null)
    if(!this.root) {
      this.root = node
      return
    }
    let now = this.root
    while(now) {
      if(now.data > node.data) {
        if(!now.left) {
          now.left = node
          now = null
        } else {
          now = now.left
        }
      } else {
        if(!now.right) {
          now.right = node
          now = null
        } else {
          now = now.right
        }
      }
    }
  }
  leftFirstMap(node = this.root) {
    if(!node) {
      return
    }
    console.log('node', node.data)
    this.leftFirstMap(node.left)
    this.leftFirstMap(node.right)
  }
}
// const parent = new Node(1, new Node(2), new Node(3))
// console.log(parent)
const bTree = new BST()
bTree.insertNode(5)
bTree.insertNode(4)
bTree.insertNode(3)
bTree.insertNode(2)
bTree.insertNode(6)
bTree.insertNode(1)
bTree.insertNode(7)
bTree.insertNode(9)
bTree.insertNode(8)
bTree.insertNode(10)
console.log(bTree)

bTree.leftFirstMap()
/*
2
| \
1  3
    \
     4
      
*/
// function renderTree() {
//   let hash = {}
//   map.forEach((item) => {
//     hash[item.id] = item
//   })
//   const parent = map.filter((item) => {
//     if(item.parent) {
//       if(!hash[item.parent].children) {
//         hash[item.parent].children = []
//       }
//       hash[item.parent].children.push(item)
//     } else {
//       return item
//     }
//   })
//   console.log(parent)
// }
// renderTree()