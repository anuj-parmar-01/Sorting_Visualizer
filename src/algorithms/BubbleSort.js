import { Swap } from "../features/ArrayFunc";

export function bubbleSort (arr){
    let order = []
    let dupArr = arr.slice()
    let i,j;
    for(  i = 0 ; i < dupArr.length  - 1; i++){
        for(  j = 0 ;j<dupArr.length - i - 1; j++ ){
          order.push([j, j+1,null,null])
            if( dupArr[j] > dupArr[j+1]){
                Swap(dupArr,j,j+1)
        order.push([j , j+1 , dupArr.slice(),null])

            }
        }
     
    }
   return order

}
