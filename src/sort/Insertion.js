import React from 'react';
import * as data from '../data/array';

const Insertion = () => {
  let insertionSort = function (array) {
    let i = 1,
      j,
      temp;
    for (i; i < array.length; i++) {
      // 새로운 숫자를 선택
      temp = array[i];
      // 현재 숫자보다 왼쪽 숫자가 크다면
      for (j = i - 1; j >= 0 && temp < array[j]; j--) {
        // 오른쪽 숫자에 왼쪽 숫자 대입
        array[j + 1] = array[j];
      }
      // 마지막 빈 칸에 선택한 숫자를 넣는다.
      array[j + 1] = temp;
    }
    return array;
  };

  insertionSort(data.arr);
  return (
    <>
      <div>
        <b>Insertion Sort</b>
      </div>
      <div>result: {data.arr}</div>
    </>
  );
};

export default Insertion;
