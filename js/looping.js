// ================= SLIDER =================

var img = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let isinya = "";

img.forEach(function (g) {

    isinya +=
        '<img id="gambar' + (g + 1) +
        '" class="geser" src="img/slider' + (g + 1) +
        '.jpg" alt="Slider ' + (g + 1) + '">';

});

const slider1 = document.getElementById("isinya");

if (slider1) {
    slider1.innerHTML = isinya;
}


// ================= SLIDER 2 =================

var img1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let isinya1 = "";

img1.forEach(function (g) {

    isinya1 +=
        '<img id="gambar1-' + (g + 1) +
        '" class="geser" src="img/slider' + (g + 1) +
        '.jpg" alt="Slider ' + (g + 1) + '">';

});

const slider2 = document.getElementById("isinya1");

if (slider2) {
    slider2.innerHTML = isinya1;
}


// ================= LOGOUT =================

const logoutBtn = document.getElementById("logout-btn");
const logoutKonten = document.getElementById("logout-konten");
const noBtn = document.getElementById("no-btn");

if (logoutBtn && logoutKonten) {

    logoutBtn.onclick = function () {
        logoutKonten.style.scale = 1;
    };

}

if (noBtn && logoutKonten) {

    noBtn.onclick = function () {
        logoutKonten.style.scale = 0;
    };

}