//  contoh NaN

const nilaiNaN = 5 * 'a';
console.log(`nilaiNaN adalah ${nilaiNaN}`);
const apakahNaN = isNaN(nilaiNaN) ? 'nilainya NaN' : 'nilainya bukan NaN'
console.log(apakahNaN);


// contoh undefined

let nilaiUndefined;
console.log(`nilai dari variabel ini adalah ${nilaiUndefined}`);
// undefined = nilai yang belum diberikan / diisi 



// contoh null

let nilaiNull = null;
console.log(`nilai dar variabel nilaiNull adalah ${nilaiNull}`);
// const guru = {
//     nama = null
// }

// contoh parseInt
let nilaiKecepatan = "200 km";
let nilainyaAja = parseInt(nilaiKecepatan)
console.log(nilainyaAja);

let nilaiNominmalDidepan = "km 20";
let nilainyaAja2 = parseInt(nilaiNominmalDidepan);
console.log(nilainyaAja2);

// contoh parseFloat
let celcius = "34.5 derajat celcius";
let angkaCelcius = parseFloat(celcius);
console.log(angkaCelcius);

// Decode uri
const alamatWebsite = "https://www.google.com?query=belajar html"
console.log(`encode uri ${encodeURI(alamatWebsite)}`)


// string object
const nama = "riever";
console.log(nama)
console.log(`panjang variabel nama adalaah ${nama.length}`)
console.log(`${nama.charAt(1)}`);
console.log(`${nama.charAt(-1)}`);
console.log(`${nama.charAt(10)}`);
let namaPanjang = nama + ' huang';
let namaPanjang2 = `${nama} huang`
console.log(namaPanjang2)
console.log(namaPanjang2.toUpperCase())

// contoh searching for a substring
const kalimat = " saya ingin jago koding supaya bisa di terima di perusahaan Google";
const kataPencarian = "Google";
const kataDidapat = kalimat.indexOf(kataPencarian);
if(kataDidapat > 0){
    console.log(`kata ${kataPencarian} ditemukan di index ${kataDidapat}`);
} else {
    console.log(`kata ${kataPencarian} tidak ditemukan`);
}