const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 7,
    },
  },
};
// [ [ 1 ], [ 2, 3 ], [ 4, 5, 6, 7 ] ]
function getTreeNodes(tree) {
  let res = [];
  if (!tree) return res;
  let index = 0;
  let queue = [tree];
  while (queue.length) {
    let size = queue.length;
    res.push([])
    while (size--) {
      let currentNode = queue.shift()
      res[index].push(currentNode.value)
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    index++
  }
  return  res
}
// console.log(getTreeNodes(tree));

// [ [ 1 ], [ 2, 3 ], [  7, 6, 5, 4 ] ]
function getTreeNodes(tree) {
  let res = [];
  if (!tree) return res;
  let index = 0;
  let queue = [tree];
  while (queue.length) {
    let size = queue.length;
    res.push([])
    while (size--) {
      let currentNode = queue.shift()
      res[index].push(currentNode.value)
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    if(index%2===0) res[index].reverse()
    index++
  }
  return  res
}
// console.log(getTreeNodes(tree));




// 二叉树的右视图(广度优先遍历) [1,3,7]
function rightSideView(tree) {
  if(!tree) return [];
  let queue = [];
  let res = [];
  queue.push(tree);
  while(queue.length) {
      res.push(queue[0].value);
      let size = queue.length;
      while(size --) {
          // 一个size的循环就是一层的遍历，在这一层只拿最右边的结点
          let front = queue.shift();
          if(front.right) queue.push(front.right);
          if(front.left) queue.push(front.left);
      }
  }
  return res;
};

// console.log(rightSideView(tree));

// 深度优先遍历 (递归)
function getTreeNodes(tree) {
  let res = [];
  if(!tree) return res
  function deepTraversal(restTree){
    res.push(restTree.value)
    if(restTree.left){
      deepTraversal(restTree.left)
    }
    if(restTree.right){
      deepTraversal(restTree.right)
    }
  }
  deepTraversal(tree)
  return res
}
// console.log( getTreeNodes(tree));

// 深度优先遍历 (非递归)

function getTreeNodes(tree) {
  let res = [];
  if(!tree) return res
  let stack = [tree]
  while(stack.length){
    let node = stack.pop()
    res.push(node.value)
    if(node){
      stack.push(node.left,node.right)
    }
  }
  return res
}

function find (tree, id) {
  let name = ''
  let list = [tree]
  while (list.length > 0 && name === '') {
    const item = list.shift()
    item.forEach(it => {
      if (it.id === id) {
        name = it.name
      } else {
        it.children && list.push(it.children)
      }
    })
  }
  return name
}
