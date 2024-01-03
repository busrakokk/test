// Add your code here
var ana_bolum = document.getElementsByTagName("section"); // fotoğraflar için section bölümüne erişim sağlandı.

for (let i= 0; i < 20; i++) 
{
  ana_bolum.innerHTML += `<img src="https://source.unsplash.com/random/${(i+1)}" alt="Resim Bulunamadı">`;
}
//dışarıdan parametre almak için literal kullanımı yapıldı.
