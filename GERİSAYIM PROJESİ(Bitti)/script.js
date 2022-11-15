let aylar = [
"Ocak",
"Şubat",
"Mart",
"Nisan",
"Mayıs",
"Haziran",
"Temmuz",
"Ağustos",
"Eylül",
"Ekim",
"Kasım",
"Aralık"
];
// console.log(aylar[10]);    // "Kasım"



const tümsaatler = document.querySelectorAll(".günsayaç h1");  

let sonaerecektarihstrong = document.querySelector(".sonaerecektarihstrong");

let sonaErecekTarih = new Date(2022,10,30,20,00);
console.log(sonaErecekTarih);

const yıl = sonaErecekTarih.getFullYear();
let ay = sonaErecekTarih.getMonth();
const gün = sonaErecekTarih.getDate();
const saat = sonaErecekTarih.getHours();
const dakika = sonaErecekTarih.getMinutes();

// ay = aylar[10];    // ay = "Kasım"

console.log(yıl,ay,gün,saat,dakika);
ay = aylar[ay];


sonaerecektarihstrong.textContent = (`${gün}/${ay}/${yıl} Saat ${saat}:${dakika+"0"} `);




let zamanlayıcı = setInterval(function() {

    let şimdikizaman = new Date().getTime();
    let kalanzaman = sonaErecekTarih - şimdikizaman;

    if(kalanzaman >= 0){                       // Eğer kalanzaman 0 dan büyükse yani bitmesine zaman varsa çalışacak.
        let gunler = Math.floor(kalanzaman / (1000 * 60 * 60 * 24));
        let saatler = Math.floor((kalanzaman % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let dakikalar = Math.floor((kalanzaman % (1000 * 60 * 60)) / (1000 * 60));
        let saniyeler = Math.floor((kalanzaman % (1000 * 60)) / 1000);
        // tüm zaman cinslerini yukarıda milisaniyeye çevirdik.

        const değerler = [gunler,saatler,dakikalar,saniyeler];

        tümsaatler.forEach(function(item,index){
            item.textContent = değerler[index];
    });

}
else{
    document.querySelector(".sonaerecektarihyazı").textContent = "Bu kampanya sona ermiştir...";
}


}, 1000);   // her 1 saniyede bir bu fonksiyon çalışacak.



