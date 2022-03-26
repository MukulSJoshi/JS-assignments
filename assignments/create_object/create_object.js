function CreateObject(arr) {
    // Write your code here
    let Keys = []
    let Value = []
    for(let i = 0; i < arr.length; i++){

        if(i%2===0){
            Keys.push(arr[i])
        }
        else{
            Value.push(arr[i])
        }
    }
    let object={}
    for(let i =0; i<Keys.length;i++){
        object[Keys[i]]=Value[i]



    }
    return object
}

module.exports = CreateObject;
