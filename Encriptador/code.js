const encrypt = document.getElementById('encriptar');
const decrypt = document.getElementById('desencriptar');
const input = document.getElementById('mensaje');
const showMessage = document.getElementById('mostrar_mensaje');
const cleanInput = document.getElementById('borrar');
const copy = document.getElementById('copiar');
const board = document.getElementById('mostrar_mensaje');



let mensaje = '';
let encryptMessage;
let decryptMessage;
let copiedText;

//Booleanos
copy.disabled = true;
board.disabled = true;



//Eventos

const validate = () => {

    let exception = /^[a-z]+$/;

    if (!exception.test(mensaje)) {
        alert('no puedes usar este tipo de caracter');
        return false
    }

    return true;

}


encrypt.addEventListener('click', () => {


    mensaje = input.value;
    encryptMessage = mensaje.replaceAll('e', 'enter').replaceAll('i', 'imes')
        .replaceAll('a', 'ai').replaceAll('o', 'ober').replaceAll('u', 'ufat')

    showMessage.innerHTML = encryptMessage;
    copy.disabled = false;


    if (!validate()) {
        showMessage.innerHTML = '';
        return
    };
})


decrypt.addEventListener('click', () => {



    mensaje = input.value;
    decryptMessage = mensaje.replaceAll('enter', 'e').replaceAll('imes', 'i')
        .replaceAll('ai', 'a').replaceAll('ober', 'o').replaceAll('ufat', 'u');

    showMessage.innerHTML = decryptMessage;

    if (!validate()) {
        showMessage.innerHTML = '';
        return
    }



})

cleanInput.addEventListener('click', () => {
    input.value = '';
    showMessage.innerHTML = '';
    copy.disabled = true;
})

copy.addEventListener('click', () => {

    let copiedText = encryptMessage || decryptMessage;

    navigator.clipboard.writeText(copiedText)
        .then(() => {
            alert('texto copiado con exito')
        })
        .catch((error) => {
            alert('error al copiar el texto', error)
        });
})
