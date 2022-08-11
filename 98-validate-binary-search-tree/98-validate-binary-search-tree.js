const isValidBST = function(root) {
    return isValid(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

function isValid(root, min, max){
    
    if(!root) {
        return true
    }
    if(root.val >= max || root.val <= min){
        return false
    }
    return isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
}