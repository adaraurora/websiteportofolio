var img = [0,1,2,3, 4, 5,6,7,8]
let isinya = ""
img.forEach(isi)

    function isi(g){
        document.getElementById("isinya").innerHTML = isinya
        isinya += ('<img id=gambar'+(g+1)+ 'geser src=looping_img/slider' +(g+1)+ '.jpg>') 
    }

var img1 = [0,1,2,3,4,5,6,7,8 ]
let isinya1 =""
img.forEach(isi1)

     function isi1(g){
    document.getElementById("isinya1").innerHTML = isinya1
    isinya1 += ('<img id=gambar' +(g+1)+ 'geser src=looping_img/slider' +(g+1)+ '.jpg>')
}

document.getElementById("logout-btn").onclick = function(){
    document.getElementById("logout-konten").style.scale = 1;
    document.getElementById("logout-konten")
}
document.getElementById("no-btn").onclick = function(){
    document.getElementById("logout-konten").style.scale = 0
}
