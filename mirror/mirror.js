/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Mirror(root)
{
    // write code here
    if(root === null){
        return false;
    }
    var temp = null;
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
}
module.exports = {
    Mirror : Mirror
};
