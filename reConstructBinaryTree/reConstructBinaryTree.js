/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function reConstructBinaryTree(pre,vin){
  if(!pre || pre.length === 0){
    return;
  }
  var treeNode = {
    val:pre[0];
  }
  var index = vin.indexOf(pre[0]);
  var pre_left = pre.slice(1,index+1);
  var pre_right = pre.slice(index+1);
  var vin_left = vin.slice(0,index);
  var vin_right = vin.slice(index+1);
  treeNode.left = reConstructBinaryTree(pre_left,vin_left);
  treeNode.right = reConstructBinaryTree(pre_right,vin_right);
  return treeNode;
}
