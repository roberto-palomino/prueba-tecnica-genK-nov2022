const array1 = [
  [1, 3, 5],
  [7, 9, 7],
  [5, 3, 1],
];

const array2 = [
  [2, 4, 6],
  [8, 10, 8],
  [6, 4, 2],
];

// const result = [];
// const array2Columns = [];
// const flatArray1Rows = [];
// const flatArray2Columns = [];

// function clasifyArrayColumns(arr) {
//   const column1Array2 = [];
//   const column2Array2 = [];
//   const column3Array2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     const row = arr[i];

//     for (let j = 0; j < row.length; j++) {
//       const columnValue = row[j];
//       if (j === 0) {
//         column1Array2.push(columnValue);
//       }
//       if (j === 1) {
//         column2Array2.push(columnValue);
//       }
//       if (j === 2) {
//         column3Array2.push(columnValue);
//       }
//     }
//   }
//   array2Columns.push(column1Array2, column2Array2, column3Array2);
// }

// function flatArray(arr, finalArray) {
//   for (const element of arr) {
//     for (const value of element) {
//       finalArray.push(value);
//     }
//   }
// }

// function multiplyArrayValues(a, b) {
//   for (let i = 0; i < Math.max(a.length, b.length); i++) {
//     result.push(a[i] * b[i]);
//   }
//   return result;
// }

// clasifyArrayColumns(array2);
// flatArray(array1, flatArray1Rows);
// flatArray(array2Columns, flatArray2Columns);
// multiplyArrayValues(flatArray1Rows, flatArray2Columns);

// console.log("resultado:", result);

// Solución de Kairos:

const result = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let rowArr1 = 0; rowArr1 < array1.length; rowArr1 += 1) {
  for (let colArr1 = 0; colArr1 < array1[rowArr1].length; colArr1 += 1) {
    result[rowArr1][colArr1] =
      array1[rowArr1][colArr1] * array2[colArr1][rowArr1];
  }
}
