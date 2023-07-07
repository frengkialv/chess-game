function spiralNumber(number) {
  const result = Array(number)
    .fill(0)
    .map(() => Array(number).fill(0));
  console.log("🚀 ~ file: sandbox.js:3 ~ spiralNumber ~ result:", result);

  // Menentukan batas atas, bawah, kiri, dan kanan
  let top = 0;
  let bottom = number - 1;
  let left = 0;
  let right = number - 1;

  // Nilai awal
  let value = 1;

  // Melakukan pengisian angka secara berurutan mengelilingi array
  while (top <= bottom && left <= right) {
    // Mengisi baris atas
    for (let i = left; i <= right; i++) {
      result[top][i] = value;
      value++;
    }
    top++;

    // Mengisi kolom kanan
    for (let i = top; i <= bottom; i++) {
      result[i][right] = value;
      value++;
    }
    right--;

    // Mengisi baris bawah
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result[bottom][i] = value;
        value++;
      }
      bottom--;
    }

    // Mengisi kolom kiri
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = value;
        value++;
      }
      left++;
    }
  }

  // return result;
}

console.log(spiralNumber(3));
/*
  [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
  ]
*/

console.log(spiralNumber(4));
/*
  [
    [1, 2, 3, 4],
    [12, 13, 14, 5],
    [11, 16, 15, 6],
    [10, 9, 8, 7]
  ]
*/

console.log(spiralNumber(5));
/*
  [
    [1, 2, 3, 4, 5],
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9],
  ]
*/

console.log(spiralNumber(6));
/*
  [
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 6, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ]
*/
