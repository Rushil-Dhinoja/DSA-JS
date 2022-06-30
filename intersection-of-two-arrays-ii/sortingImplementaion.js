/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // Sort Array 1
    nums1.sort((a, b) => a-b)
    // Sort Array 2
    nums2.sort((a, b) => a-b)
    
    // Use two pointer approach
    const returnArray= []
    let i = 0
    let j = 0
    
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++
        }else if(nums2[j] < nums1[i]){
            j++
        }else{
            returnArray.push(nums2[j])
            i++
            j++
        }
    }
    
   return returnArray
};
