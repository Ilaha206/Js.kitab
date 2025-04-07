// Task 1
// Verilmiş arrayın cüt ədədlərinin maksimumu ilə tək ədədlərinin minimumunun yerini dəyişən proqram tərtib edin. (custom yaz)
// arr = [23, 1, 5, 3, 12, 4, 9, 81, 7, 11, 22, 31, 6]
// let min = arr[0]
// let max = arr[1]
// for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         if (arr[i] > max) {
//             max = arr[i]
//             maxEvenIndex = i
//         }
//     }
//     else if (arr[i] % 2 !== 0) {
//         if (arr[i] < min) {
//             min = arr[i]
//             minOddIndex = i
//         }
//     }
// }
// let temp = arr[maxEvenIndex]
// arr[maxEvenIndex] = arr[minOddIndex]
// arr[minOddIndex] = temp
// console.log(arr);
// 3)  stringin trim metodunu ozunuz yazmaga calisin
let sayHi = "           Hamıya salam     "
console.log(sayHi);
// task 2
// Verilmis arrayin  daxilinde qiymeti  50 den cox olanlari array kimi qaytaran kod yaz  (array  methodlarina nezer yetir) 
var arr = [{ urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
{ urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
{ urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
{ urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
{ urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
{ urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
{ urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
];
for (i = 0; i < arr.length; i++) {
    if (arr[i].stok > 50) {
        console.log(arr[i]);

    }
}
// 3. yuxaridaki arrayde  kategoryasi meyve ve sebze olanlari yanlizca ekrana cixaran kod yaz   (array  methodlarina nezer yetir)
for (i = 0; i < arr.length; i++) {
    if (arr[i].kategori === "Meyve ve Sebzeler") {
        console.log(arr[i].kategori);

    }
}
// 4.yuxaridaki arrayde kategoryasi meyve ve sebze olanlari ve stokda  2 den cox olanlari ekrana cixaran kod yaz array methodlarina nezer yetir)
for (i = 0; i < arr.length; i++) {
    if (arr[i].kategori === "Meyve ve Sebzeler" && arr[i].fiyat > 2) {
        console.log(arr[i]);

    }
}
// 5.  yuxaridaki arrayde   Sut adli mehsulun olub olmamasini yoxlayan   kod yaz    (array  methodlarina nezer yetir)
for (i = 0; i < arr.length; i++) {
    if(arr[i].urunAdi==="Süt"){
        console.log(true);
    }      
}
// 6.  yuxaridaki arrayde   Ton baliginin indexini tapan program yaz  (array  methodlarina nezer yetir)
for (i = 0; i < arr.length; i++) {
    if(arr[i].urunAdi==="Ton Balığı"){
        console.log(i);
        
    }
}