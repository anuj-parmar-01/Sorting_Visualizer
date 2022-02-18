import React, { useEffect, useState } from "react";
import { GenerateArray } from "../../features/ArrayFunc";
import styles from "./Header.module.css"

export default function Header(props) {
    const [count, setCount] = useState(20)
    let algo = ["Bubble Sort","Selection Sort","Insertion Sort"]

    const handleBarSize = (e) => {
        let barGroup = GenerateArray(e)
        props.updateBar(barGroup)
        setCount(e)
    }
    const newSpeed =(e) =>{
        props.changeSpeed((7000/e.target.value))
    }
    return (
        <>
            <div className={styles.header}>
                <div className={styles.font_20}> Sorting Visualizer</div>
                <div className={styles.flex} style={{ width: "80%", margin: "0 auto", justifyContent: "space-between" }}>
                    <div className={styles.range_container}>
                        <div>
                            <span className={`${styles.font_16}  ${styles.font_weight}`}>{`Array Size`}</span> {" "}
                            <input type="range" min="1" max="100" onChange={(e) => handleBarSize(e.target.value)} />
                        </div>
                        <div>
                            <span className={`${styles.font_16}  ${styles.font_weight}`}>Sorting Speed</span> {" "}
                            <input type="range" min="10" max="10000"  onChange={(e)=> newSpeed((e))}/>
                        </div>
                    </div>
                    <div className={styles.flex} style={{ gap: "20px", alignItems: "flex-end" }}>
                       {algo.map((sort) => {
                        return   <button
                           onClick ={()=> props.changeAlgo(sort)}
                            className={ props.currentAlgo !== sort ?`${styles.font_16} ${styles.sortbtn}  ${styles.font_weight}`
                            : styles.active}>
                            {sort}
                           </button>
                       })}
                        <button className={styles.performbtn} onClick={()=>props.performSort()}> Sort</button>
                        <button className={styles.change_arr} onClick={()=> handleBarSize(count)}>New Array</button>
                    </div>
                </div>
            </div>
        </>
    )
}