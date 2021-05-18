function arrayMinMax(array){
    let min, max;
    if(array.length === 1){
        min = array[0]
        max = array[0]
        return {min, max}
    }

    if(array[0] > array[1]){
        min = array[1]
        max = array[0]
    }else{
        min = array[0]
        max = array[1]
    }
    for(let i = 2; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }else if(array[i] < min){
            min = array[i]
        }
    }
    return {min, max}
}

console.log(arrayMinMax([6]))
console.log(arrayMinMax([6,12,2,6,9,24]))