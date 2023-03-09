var btnEncriptar = document.querySelector("#boton-encriptar");
var btnDesencriptar = document.querySelector("#boton-desencriptar");
var btnCopiar = document.querySelector("#copiar");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

function encriptar(){
    var textoInput = document.getElementById("textoUsuario").value.toLowerCase();
    /*valores a reemplazar*/

    var textoEncriptado = textoInput.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/o/img, "over");
    var textoEncriptado = textoEncriptado.replace(/u/img, "utat");

    document.getElementById("resultado").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    document.getElementById("resultado").style.display = "inherit";   
    document.getElementById("elementos").style.display = "none";

}

function desencriptar(){
    var textoInput = document.getElementById("textoUsuario").value.toLowerCase();
    /*valores a reemplazar*/

    var textoEncriptado = textoInput.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/over/img, "o");
    var textoEncriptado = textoEncriptado.replace(/utat/img, "u");
    
    document.getElementById("resultado").innerHTML = textoEncriptado;
    document.getElementById("resultado").style.display = "inherit";   
    document.getElementById("elementos").style.display = "none";
}

function copiar(){
    let btnCopiar = document.querySelector("#resultado");
    btnCopiar.select();
    document.execCommand("copy");
}


