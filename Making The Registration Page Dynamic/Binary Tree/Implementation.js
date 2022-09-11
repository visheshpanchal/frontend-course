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

function search(node, x) {
  if (node === null) {
    return false;
  }

  if (node.x === x) return true;

  if (x > node.x) {
    return search(node.right, x);
  } else {
    return search(node.left, x);
  }
}

var root = new TreeNode(15);

insertNode(root, 18);
insertNode(root, 12);
insertNode(root, 25);

console.log(root.x);
console.log(root.left.x);
console.log(root.right.x);
console.log(root.right.left);

console.log(search(root, 15));
