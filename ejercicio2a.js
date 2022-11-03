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

const result = [];
const columnsArray2 = [];
const array1FilesValue = [];
const array2ColumnsValue = [];

function Array1Elements(arr) {
  for (const element of arr) {
    for (const value of element) {
      array1FilesValue.push(value);
    }
  }
}
Array1Elements(array1);

function clasifiedArrayColumns(arr) {
  const column1Array2 = [];
  const column2Array2 = [];
  const column3Array2 = [];
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];

    for (let j = 0; j < row.length; j++) {
      const columnValue = row[j];
      if (j === 0) {
        column1Array2.push(columnValue);
      }
      if (j === 1) {
        column2Array2.push(columnValue);
      }
      if (j === 2) {
        column3Array2.push(columnValue);
      }
    }
  }
  columnsArray2.push(column1Array2, column2Array2, column3Array2);
}
clasifiedArrayColumns(array2);

function Array2ElementsValue(arr) {
  for (const element of arr) {
    for (const value of element) {
      array2ColumnsValue.push(value);
    }
  }
}
Array2ElementsValue(array2);

function multiplyArrayValues(a, b) {
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    result.push(a[i] * b[i]);
  }
  return result;
}
multiplyArrayValues(array1FilesValue, array2ColumnsValue);
