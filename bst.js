/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function findSum(root, k) {
    // Create an empty set to store values of BST nodes
    let set = new Set();
  
    // Perform inorder traversal of the BST
    function inorder(root) {
      // Base case: return if root is null
      if (!root) return false;
  
      // Recursively traverse left subtree
      if (inorder(root.left)) return true;
  
      // Check if k - root.val exists in the set
      if (set.has(k - root.val)) return true;
  
      // Add root.val to the set
      set.add(root.val);
  
      // Recursively traverse right subtree
      return inorder(root.right);
    }
  
    // Return result of inorder traversal
    return inorder(root);
  }
  