import { Swap } from "../features/ArrayFunc";

export default function InsertionSort(arr) {
    const copy = arr.slice()
    const order = [];
    for (let i = 0; i < copy.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        order.push([j, j + 1, false]);
        if (copy[j + 1] < copy[j]) {
          order.push([j, j+1,null, true]);
          Swap(copy, j, j + 1);
          order.push([j + 1, j,copy.slice(), true]);
        } else break;
      }
    }
    return order;
  }