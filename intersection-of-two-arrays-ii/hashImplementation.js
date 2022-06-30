/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  
  // Create a map 
    let map = {}
    // Create a array
    let result = []
    
    
    // Loop through the first array and keep track of each occurence
    for(let i = 0;i< nums1.length; i++){
        if(map[nums1[i]]){
            map[nums1[i]] += 1
        }else{
            map[nums1[i]] = 1 
        }
    }
  
    // loop through second array and decrement the value once the number is matched
     for(let i = 0;i< nums2.length; i++){
        if(map[nums2[i]]){
            result.push(nums2[i])
            map[nums2[i]] -= 1   
        }
    }
   
  return result
};
