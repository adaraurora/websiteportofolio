let username
let password

document.getElementById("klik").onclick = function(){
    username = document.getElementById("user").value;
    password = document.getElementById("pw").value

    if(username == "" && password == ""){
        document.getElementById("alert1").textContent =`Harap isi Username Anda`
        document.getElementById("alert2").textContent =`Harap isi Password Anda`
    }
    else if(username == "" && password !== "123"){
        document.getElementById("alert1").textContent = `Harap isi Username Anda`
        document.getElementById("alert2").textContent = ``
    }
    else if(username !=="admin" && password == ""){
        document.getElementById("alert1").textContent = ``
        document.getElementById("alert2").textContent = `Harap isi Password Anda`
    }
    else if (username !=="admin" && password!=="123"){
        document.getElementById("alert1").textContent = `Username Anda Salah`
        document.getElementById("alert2").textContent = `Password Anda Salah`
    }
    else if (username == "admin" && password == ""){
        document.getElementById("alert1").textContent = ``
        document.getElementById("alert2").textContent = `Harap isi Password Anda`
    }
    else if (username == "" && password == "123"){
        document.getElementById("alert1").textContent = `Harap isi Username Anda`
        document.getElementById("aler2").textContent = ``
    }
    else if (username == "admin" && password !== "123"){
        document.getElementById("alert1").textContent = ``
        document.getElementById("alert2").textContent = `Password Anda Salah`
    }
    else if (username !== "admin" & password == "123"){
        document.getElementById("alert1").textContent = ` Username Anda Salah`
        document.getElementById("alert2").textContent = ``
    }
    else {
        window.location.href ="/index1.html"
    }
}

