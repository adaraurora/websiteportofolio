var img = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let isinya = "";

img.forEach(isi);

function isi(g) {
    isinya += '<img id="gambar' + (g + 1) + '" class="geser" src="img/slider' + (g + 1) + '.jpg" alt="Slider ' + (g + 1) + '">';
    
    document.getElementById("isinya").innerHTML = isinya;
}


var img1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let isinya1 = "";

img1.forEach(isi1);

function isi1(g) {
    isinya1 += '<img id="gambar' + (g + 1) + '" class="geser" src="img/slider' + (g + 1) + '.jpg" alt="Slider ' + (g + 1) + '">';
    
    document.getElementById("isinya1").innerHTML = isinya1;
}


// ================= LOGOUT =================

document.getElementById("logout-btn").onclick = function () {
    document.getElementById("logout-konten").style.scale = 1;
};


document.getElementById("no-btn").onclick = function () {
    document.getElementById("logout-konten").style.scale = 0;
};