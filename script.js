const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
let mensajeEncriptado = document.getElementById("mensaje-encriptado");
let titulo = document.getElementById("titulo-mensaje");
let muñeco = document.getElementById("muñeco");
let parrafo = document.getElementById("parrafo");
const contenedor = document.querySelector(".container2");

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
]

function eliminarFondo(){
    const mensaje = document.querySelector(".mensaje");
    textArea.style.backgroundImage = "none";
    textArea.style.color = "#495057";
    textArea.value = "";
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    textArea.value = textoEncriptado;
    textArea.value = "";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    textArea.value = textoDesencriptado;
    textArea.value = "";
}

function encriptar(stringEncriptado){
    stringEncriptado = stringEncriptado.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            parrafo.textContent = "";
            titulo.textContent = stringEncriptado;
            //Quedamos aca.
            muñeco.style.display = "none";

        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado){
    stringDesencriptado = stringDesencriptado.toLowerCase();
    for(let i=0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            parrafo.textContent = "";
            titulo.textContent = stringDesencriptado;
            muñeco.style.display = "none";
        }
    }
    return stringDesencriptado;
}

function btnCopiar(){
    const textoCopiado = titulo.textContent;
    navigator.clipboard.writeText(textoCopiado);
    alert("Texto copiado");
}