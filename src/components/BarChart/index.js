import React, { useEffect, useState } from "react";
import { GenerateArray } from "../../features/ArrayFunc";
import SingleBar from "../SingleBar";
import styles from "./BarChart.module.css"
import Header from "../Header";
import { bubbleSort } from "../../algorithms/BubbleSort";
import SelectionSort from "../../algorithms/SelectionSort";
import InsertionSort from "../../algorithms/MergeSort";



export default function BarChart() {
  const [timeOut, setTime] = useState(140)
  const [bars, setBar] = useState([])
  const [currentStep, setCurrentStep] = useState(null)
  const [color, checkColor] = useState(null)
  const [sortedBars, setSortedBar] = useState([])
  const [selectedAlgo, setselectedAlgo] = useState("Bubble Sort")

  useEffect(() => {
    setBar(GenerateArray(20))
  }, [])

  const setSort = (algo, bars) => {
    switch (algo) {
      case "Bubble Sort":
        return bubbleSort(bars)
      case "Selection Sort":
        return SelectionSort(bars)
        case 'Insertion Sort':
          return InsertionSort(bars)
    }
  }
console.log(bars)
  const handleSort = () => {
    let steps = setSort(selectedAlgo, bars)
    console.log(steps, "step")
    let arr = []
    for (let i = 0; i < steps.length; i++) {
      (function () {
        setTimeout(() => {
          checkColor(null)
          console.log(steps[i], "step")
          let [j, k, arr] = steps[i]
          console.log("current step set1")
          setCurrentStep([j, k])
          if (arr) {
            setBar(arr)
            checkColor("#14FEC5")
          }
          if (i === steps.length - 1) {
            setCurrentStep(null)
          }
        }, timeOut * (i + 1))
      })()
    }
  }
   return (
     <>
      <Header updateBar={setBar}
        updateSpeed={setTime}
        changeAlgo={setselectedAlgo}
        currentAlgo={selectedAlgo}
        performSort={handleSort}
        changeSpeed={setTime} />

      <div className={styles.outer_container}>
        <div className={styles.container}>
          <div className={styles.chart_container}>
            {bars.map((bar, index) => {
              return <SingleBar
                currentBlock={currentStep}
                bar={bar}
                index={index}
                sortedbars={sortedBars}
                Color={color}
              />
            })}
          </div>
          <div className={styles.grey_line}>
          </div>
        </div>
      </div>
    </>
  )
}