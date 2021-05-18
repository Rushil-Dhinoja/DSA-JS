// Function to reverse an array which will except an array of n elements as a argument.
function reverseArray(array){
    //Empty array to which will be used to store a reversed array
    const reversedArray = []
    // For loop that will loop through the array passed as argument and will push each element to new array in reverse order
    for(let i = array.length-1; i >= 0; i-- ){
        // Pushing the element to the new array
        reversedArray.push(array[i])
    }
    console.log('Original Array', array)
    console.log('Reversed Array', reversedArray)
}

reverseArray([5,6,8,7,2,0,5])