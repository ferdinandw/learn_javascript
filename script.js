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
// const kataDidapat = kalimat.indexOf(kataPencarian);
console.log(kalimat)
// if(kataDidapat > 0){
//     console.log(`kata ${kataPencarian} ditemukan di index ${kataDidapat}`);
// } else {
//     console.log(`kata ${kataPencarian} tidak ditemukan`);
// }


if (kalimat.includes(kataPencarian)){
    console.log(`kata ${kataPencarian} ditemukan`);
} else {
    console.log(`kata ${kataPencarian} tidak ditemukan`);
}


// contoh special character usually prefix with "\"
console.log(`newLine \n \n second newLine`)
console.log(' dia berkata "ya itu benar" yang lain i can\' t do it')


// learn number
const num = 3.14;
console.log(num.toFixed(1));

// learn array
const namaSiswaImpactByte = ['Sony', 'frederic', 'ozy', 'indra', 'julia'];
namaSiswaImpactByte.push('evan');
console.log(namaSiswaImpactByte)
namaSiswaImpactByte.pop();
console.log(namaSiswaImpactByte);

// array for in
for (let siswa in namaSiswaImpactByte){
    console.log(namaSiswaImpactByte[siswa]);
}

// learn array method
const namaSiswaUIB = ['anges', 'bill', 'river', 'oriq', 'vincent'];
const namaSiswaGlints = namaSiswaImpactByte.concat(namaSiswaUIB); //concat = gabung array
console.log(namaSiswaGlints)

// learn array sorting

console.log(namaSiswaGlints.sort());


// number
const numbers = [3,6,1,0,8, 12,0];
console.log(numbers.sort())

// learn array join
console.log(namaSiswaGlints.join(', '));

// for each
namaSiswaGlints.forEach((item,index,array) =>{
    console.log(`nama siswa : ${item}`)
})

const namaSiswaDgnAsal = namaSiswaGlints.map((item,index,array) =>{
    return{
        noId: index + 1,
        name: item,
        asal: 'Batam'
    }
})
const newSiswa = {
    noId: 11,
    name: 'Budi',
    asal: 'medan'
}
namaSiswaDgnAsal.push(newSiswa)
console.log(namaSiswaDgnAsal)


//  contoh array find
const ditemukan = namaSiswaDgnAsal.filter((item,index,array) =>{
    if (item.asal =="Batam")
        return true;
    return false;
})
console.log(ditemukan)