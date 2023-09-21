let nombre = document.getElementById("nombre");
let email = document.getElementById("email");
let asunto = document.getElementById("asunto");
let mensaje = document.getElementById("mensaje");
let form = document.getElementById("warnings");
let botonEnviar = document.getElementById("boton-enviar");

botonEnviar.addEventListener("click", e => {
    e.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (nombre.value.length < 6) {
        warnings += `El nombre es muy corto <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if (asunto.value.length < 30) {
        warnings += `Supera el numero maximo de caracteres <br>`;
        entrar = true;
    }
    if (mensaje.value.length < 200) {
        warnings += `Supera el numero maximo de caracteres <br>`;
        entrar = true;
    }
    if (entrar) {
        parrafo.innerHTML = warnings;
    } else {
        parrafo.innerHTML = "Enviado"
    }

    let usuario = [nombre.value, email.value];
    localStorage.setItem("usuario",JSON.stringify(usuario));
})