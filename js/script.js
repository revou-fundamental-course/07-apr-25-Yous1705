let nameMessage = document.getElementById("name")
let tanggal = document.getElementById("tgl-lahir")
let message = document.getElementById("pesan")


document.getElementById('submit').addEventListener("click", function (event) {
    event.preventDefault();

    const Nama = nameMessage.value
    const Tanggal = tanggal.value
    const gender = document.querySelector('input[name="jenis-kelamin"]:checked')
    const JenisKelamin = gender ? gender.value : ''
    const Pesan = message.value

    if (Nama == '') {
        alert('Please enter your name')
    }
    if (Tanggal == '') {
        alert('Please enter your Tanggal lahir')
    }
    if (JenisKelamin == '') {
        alert('Please enter your Jenis Kelamin')
    }
    if (Pesan == '') {
        alert('Please enter your Message')
    } else {
        alert('Pesan Terkirim')
        document.getElementById('name-message').innerHTML = Nama
        document.getElementById('tgl').innerHTML = Tanggal
        document.getElementById('gender-message').innerHTML = JenisKelamin
        document.getElementById('pesan-dikirim').innerHTML = Pesan

    }




})
var slideIndex = 1;
showDivs(slideIndex)

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none"
    }
    imgList[slideIndex - 1].style.display = "block"

}

setInterval(() => {
    plusDivs(1);
}, 2000)


document.addEventListener("DOMContentLoaded", function () {
    let NamaPengguna = prompt("Siapakah nama anda", "");
    document.getElementById("name-title").innerHTML = NamaPengguna;
});