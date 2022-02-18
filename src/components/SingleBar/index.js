import React from "react";
import styles from "./SingleBar.module.css"

export default function SingleBar (value) {
// console.log(` ${value.currentBlock && (value.currentBlock.includes(value.index) !== -1)? "red":""}`,"colorbda")
// console.log(value.index,"index")
//   console.log(value.sortedbars,"sortedbar")
 console.log(value.currentBlock,"current")
     
   let activeColor = value.Color && value.currentBlock && value.currentBlock.indexOf(value.index)!==-1 ? value.Color : "red"
//    console.log(activeColor,"color")
    return (
        <>
         <div style={{height:`${value.bar*5}px`,
         background: `${value.currentBlock && value.currentBlock.indexOf(value.index)!==-1 ? activeColor : "blue"}`}}
          className={styles.chart}>
           </div>
        </>

    )
}