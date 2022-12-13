/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function largestRectangle(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
      return 0;
    }
  
    const heights = Array(matrix[0].length).fill(0);
    let maxArea = 0;
  
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[row][col] === 1) {
          heights[col]++;
        } else {
          heights[col] = 0;
        }
      }
  
      maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
  
    return maxArea;
  }
  
  function largestRectangleArea(heights) {
    const stack = [-1];
    let maxArea = 0;
  
    for (let i = 0; i < heights.length; i++) {
      while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i]) {
        maxArea = Math.max(
          maxArea,
          heights[stack.pop()] * (i - stack[stack.length - 1] - 1)
        );
      }
      stack.push(i);
    }
  
    while (stack.length > 1) {
      maxArea = Math.max(
        maxArea,
        heights[stack.pop()] * (heights.length - stack[stack.length - 1] - 1)
      );
    }
  
    return maxArea;
  };
  