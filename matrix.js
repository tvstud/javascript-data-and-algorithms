function minFallingPathSum(matrix) {
    const n = matrix.length;

    for (let row = 1; row < n; row++) {
        for (let col = 0; col < n; col++) {
            const left = col > 0 ? matrix[row - 1][col - 1] : Infinity;
            const middle = matrix[row - 1][col];
            const right = col < n - 1 ? matrix[row - 1][col + 1] : Infinity;
            matrix[row][col] += Math.min(left, middle, right);
        }
    }

    let result = Infinity;
    for (let col = 0; col < n; col++) {
        result = Math.min(result, matrix[n - 1][col]);
    }

    return result;
}
