// ---------CALLBACK---------
/*function mostra(num){
    console.log(num)
}

function soma(a, b, callback){
    var op = a + b;
    callback(op)
}

function multiplicacao(a, b, cb){
    var op = a * b;
    cb(op);
}

soma(2, 2, mostra);

multiplicacao(2, 4, mostra)*/
//---------------------------



function chunkArrayInGroups(arr, size) {
    let newArray = []
    for(let i = 0; i< arr.length; i++){
        for(let i = 1; i < size; i++){
            
        }
    }
    return arr.slice(1,3);
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));