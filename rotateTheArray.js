let array = [1,2,3,4,5,6]

function rotateTheArray(array){
    const shift = array.pop()
    array.unshift(shift)
    return array;
}

console.log(rotateTheArray(array));