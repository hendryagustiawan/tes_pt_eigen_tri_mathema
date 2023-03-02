// 1.  Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
function reverse(string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    if (i == string.length - 1) {
      continue;
    }
    result += string[i];
  }
  return result + `${string}`[string.length - 1];
}

console.log(reverse("NEGIE1"));

// 2. Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
function longCharacter(string) {
  let result = 0;
  string.split(" ").forEach((element, index) => {
    if (result < element.length) {
      result = element.length;
    }
  });
  return result;
}

console.log(longCharacter("Saya sangat senang mengerjakan soal algoritma"));

// 3. Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
function findDuplicate(input, query) {
  let result = [];
  query.map((elementQuery, index1) => {
    input.map((elementInput, index2) => {
      if (elementQuery === elementInput) {
        result.push(1);
      }
    });
  });

  return result;
}

console.log(findDuplicate((INPUT = ["xc", "dz", "bbb", "dz"]), (QUERY = ["bbb", "ac", "dz"])));

// 4. Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:
function findDiagonal(matrix) {
  let diagonal1 = 0;
  let diagonal2 = 0;

  for (let i = 0; i < 3; i++) {
    diagonal1 += matrix[i][i];
    diagonal2 += matrix[i][3 - i - 1];
  }

  return Math.abs(diagonal1 - diagonal2);
}

console.log(
  findDiagonal([
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
