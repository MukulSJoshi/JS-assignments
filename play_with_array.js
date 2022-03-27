function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90] 

        Write you code below
    */  
    var n=readLine();
    arr.insert();
    for(i<=2;i/2;i++){
        if i/2==1;
        return arr
    else {
        return("Error")
    }
    
    }
}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
    let K = []
    for(let i = 0; i < arr.length; i++){
    let r = arr[i] * n;
    K.push(r);
    }
    return K
    
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
    
    for(let i=0;i<arr.length;i++) {
        if i ==n;
         arr.pop(i);
    return arr

    }
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}