/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {

    const matSize = mat.length * mat[0].length
    const matElSize = mat[0].length    
    
    // Check if the reshaping is possible or not if not return mat
    if(matSize !== r*c){
        return mat
    }
    // Create a empty Result array
    const result = []
    
    //Loop through the array till the i < matSize = (matRow*matCol)
    for(let i = 0; i< matSize; i++){
      
        // Calculate the current row
        // Here I can be a max of 3 as matSize is 4
        // i / 4 = 0/4 = 0 = 0
        // i / 4 = 1/4 = 0.25 = 0
        // i / 4 = 2/4 = 0.5 = 0
        // i / 4 = 3/4 = 0.75 = 0
        // In all four pass row will be zero because we are using floor
       
        let row = (Math.floor(i / c))
        
        // Check if the current row element exists in the results array if not push and empty array to it
        if(!result[row]){
            result.push([])
        } 
        // use the below formula to add element to the result array
        // The values will be integers only always as we are using Math.floor
        // [0/2][0%2] = [0][0] = [0][0]
        // [1/2][1%2] = [0.5][1] = [0][1]
        // [2/2][2%2] = [1][0] = [1][0]
        // [3/2][3%2] = [1.5][1] = [1][1]
        result[row].push(mat[Math.floor(i/matElSize)][i%matElSize])
        
    }
    
    return result
};
