// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return []
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
        arr = i % 2 == 0
            ? arr.concat(matrix[i].sort((a, b) => a - b))
            : arr.concat(matrix[i].sort((a, b) => a - b).reverse())
    }
    return arr;
}
