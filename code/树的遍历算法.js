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
// 二叉树的广度遍历[ [ 1 ], [ 2, 3 ], [ 4, 5, 6, 7 ] ]
function getTreeNodes(tree) {
  let res = [];
  if (!tree) return res;
  let index = 0;
  let queue = [tree];
  while (queue.length) {
    let size = queue.length;
    res.push([]);
    while (size--) {
      let currentNode = queue.shift();
      res[index].push(currentNode.value);
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    index++;
  }
  return res;
}
console.log(getTreeNodes(tree));
function getTreeNodes3(tree) {
  let res = [];
  if (!tree) return res;
  let stack = [tree];
  while (stack.length) {
    let node = stack.shift();
    if (node) {
      res.push(node.value);
      stack.push(node.left, node.right);
    }
  }
  return res;
}
// console.log( getTreeNodes3(tree));
// 广度递归
function getTreeNodes2(tree) {
  let res = [];
  let queue=[tree]
  let index = 0;
  function wideTraversal() {
    const curNodes = queue[index]
    index++
    if (curNodes) {
      curNodes.left && queue.push(curNodes.left)
      curNodes.right && queue.push(curNodes.right)
      res.push(curNodes.value)
      wideTraversal()
    }
  }
  wideTraversal()
  return res;
}
// const res2 = getTreeNodes2(tree)
// console.log(res2);

// 找节点名称 (广度优先)
function find(tree, id) {
  let name = "";
  let list = [tree];
  while (list.length > 0 && name === "") {
    const item = list.shift();
    item.forEach((it) => {
      if (it.id === id) {
        name = it.name;
      } else {
        it.children && list.push(it.children);
      }
    });
  }
  return name;
}

// 深度优先遍历 (递归)
function getTreeNodes5(tree) {
  let res = [];
  if (!tree) return res;
  function deepTraversal(restTree) {
    res.push(restTree.value);
    if (restTree.left) {
      deepTraversal(restTree.left);
    }
    if (restTree.right) {
      deepTraversal(restTree.right);
    }
  }
  deepTraversal(tree);
  return res;
}
// console.log( getTreeNodes(tree));

// 深度优先遍历 (非递归)

function getTreeNodes4(tree) {
  let res = [];
  if (!tree) return res;
  let stack = [tree];
  while (stack.length) {
    let node = stack.pop();
    if (node) {
      res.push(node.value);
      stack.push(node.left, node.right);
    }
  }
  return res;
}

