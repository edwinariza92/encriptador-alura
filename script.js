
function encriptar (){
    var frase = document.getElementById("texto").value.toLowerCase();

    var textoEncriptado = frase.replace(/e/img,"enter");
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/img,"ai");
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("mensaje").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "flex";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("caja").style.display = "none";
    
}

function desEncriptar (){
    var frase = document.getElementById("texto").value.toLowerCase();

    var textoEncriptado = frase.replace(/enter/img,"e");
    var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
    var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
    var textoEncriptado = textoEncriptado.replace(/ai/img,"a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

    document.getElementById("mensaje").innerHTML = textoEncriptado;
    document.getElementById("copiar").style.display = "flex";
    document.getElementById("muneco").style.display = "none";
    document.getElementById("caja").style.display = "none";

}

function copiar(){
    //var contenido= document.querySelector("mensaje");
    //contenido = document.execCommand("copy");

    var contenido = document.getElementById('mensaje');
    var seleccion = document.createRange();
    seleccion.selectNodeContents(contenido);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);
}


