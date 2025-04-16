let nameMessage = document.getElementById("name")
let tanggal = document.getElementById("tgl-lahir")
let message = document.getElementById("pesan")


document.querySelector(".form-message").addEventListener("submit", function (event) {
    const form = event.target;

    if (!form.checkValidity()) {
        return;
    }


    event.preventDefault();


    const Nama = document.getElementById("name").value;
    const Tanggal = document.getElementById("tgl-lahir").value;
    const gender = document.querySelector('input[name="jenis-kelamin"]:checked');
    const JenisKelamin = gender ? gender.value : '';
    const Pesan = document.getElementById("pesan").value;

    document.getElementById("name-message").innerHTML = Nama;
    document.getElementById("tgl").innerHTML = Tanggal;
    document.getElementById("gender-message").innerHTML = JenisKelamin;
    document.getElementById("pesan-dikirim").innerHTML = Pesan;
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