import { Swap} from "../features/ArrayFunc";


export default function SelectionSort(arr){
 let i,j,minIndx
 let dupArr = arr.slice()
 let order =[];

 for(i = 0 ; i< dupArr.length - 1 ; i++){
     minIndx = i ;
    //  order.push([i,i+1,null,null])
     for( j = i + 1 ;  j < dupArr.length ; j++ ){
         order.push([i,j,null,null])
         if(dupArr[j] < dupArr[i]){
             minIndx = j
             Swap(dupArr,minIndx,i)
             order.push([i,j,dupArr.slice(),null])
            
         }
     }
    //  order.push([i,j,null,null])
 }
 return order
}