export function GenerateArray(count){
    console.log(count)
      let arr = [];
    for( let i = 0 ; i < count ; i++ ){
        arr.push(parseInt((Math.random()*101).toFixed(0)))
    }
    return arr
}


export function Swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}