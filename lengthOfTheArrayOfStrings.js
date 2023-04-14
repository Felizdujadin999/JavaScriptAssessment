let string = ["05241", "0", "000111224", "24"]


function lengthOfArray(string){
    let array = []  
    for(let i = 0; i < string.length; i++){
        array[i] = string[i].length
    }
    return array;
}

console.log(lengthOfArray(string))