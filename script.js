const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const patron = /^[a-zñ\s]+$/;

//´La letra "e" es convertida para "enter"´
//´La letra "i" es convertida para "imes"´
//´La letra "a" es convertida para "ai"´
//´La letra "o" es convertida para "ober"´
//´La letra "u" es convertida para "ufat"´

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    if(patron.test(textoEncriptado)){
        mensaje.value = textoEncriptado
        textArea.value = "";
        mensaje.style.backgroundImage = "none"
     } else {
        alert("caracteres especiales no validos")
    }
    
}



function encriptar(stringEncriptada){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()

    for(let i=0;i <matrizcodigo.length; i++ ){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
    } 
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    if(patron.test(textoEncriptado)){
        mensaje.value = textoEncriptado
        textArea.value = "";
    } else {
        alert("caracteres especiales no validos")
    }
   
}


function desencriptar(stringDesencriptada){
    let matrizcodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0;i <matrizcodigo.length; i++ ){
        if(stringDesencriptada.includes(matrizcodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }
    } 
    return stringDesencriptada
}
// Función para copiar el texto del área de texto al portapapeles
function copiarTexto() {
    // Selecciona el área de texto con el contenido que quieres copiar
    const mensajeTextarea = document.querySelector('.mensaje');
    
    // Selecciona el contenido del área de texto
    mensajeTextarea.select();
    mensajeTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Intenta copiar el texto al portapapeles
    try {
        document.execCommand('copy');
        alert('Texto copiado al portapapeles!');
    } catch (err) {
        alert('No se pudo copiar el texto.');
    }
}

