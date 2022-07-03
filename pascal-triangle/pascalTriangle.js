/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    // Create a empty result array
    let result = []
    
    // loop through numRows
    for(let i = 0; i< numRows; i++){
        // Initialize a empty array in result
        result[i] = []
        
        // Add 1 to the first index of subArray
        result[i][0]= 1
        
        // loop through the sub array thill j < i starting j = 1
        for(let j =1 ; j< i; j++){
            // Formula to get the value of new element
            result[i][j] = result[i-1][j-1] + result[i-1][j]
        }
      
        // Add 1 to the last element of sub array
        result[i][i] = 1
    }
    
    return result
};
