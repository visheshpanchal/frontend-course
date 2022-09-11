class TreeNode {
  constructor(_x = 0) {
    this.x = _x;
    this.left = null;
    this.right = null;
  }
}

function insertNode(node, x) {
  if (node === null) {
    let newNode = new TreeNode(x);

    return newNode;
  } else {
    if (x >= node.x) {
      node.right = insertNode(node.right, x);
    } else if (x < node.x) {
      node.left = insertNode(node.left, x);
    }
  }

  return node;
}

function preOrderTraversal(root) {
  if (root === null) return;

  let stack = [];

  stack.push(root);

  let curr = new TreeNode();
  curr = root;

  while (stack.length !== 0) {
    if (curr !== null) {
      console.log(curr.x);

      if (curr.right) {
        stack.push(curr.right);
      }
      curr = curr.left;
    } else {
      curr = stack[stack.length - 1];
      stack.pop();
    }
  }
}

function recursivePreOrder(root) {
  if (root === null) return;

  console.log(root.x);
  recursivePreOrder(root.left);
  recursivePreOrder(root.right);
}

var root = new TreeNode(15);

insertNode(root, 18);
insertNode(root, 12);
insertNode(root, 25);
console.log("Pre Order Traversal");
recursivePreOrder(root);
