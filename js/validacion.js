// declaro las const
const formulario = document.getElementById('miForm');
const inputs = document.querySelectorAll('#miForm .entrada');

// expresiones regulares
const expresiones = {
    fname: /^[a-zA-ZÀ-ÿ\s]{2,20}$/, //a-z,0-9, - _
    lname: /^[a-zA-ZÀ-ÿ\s]{3,30}$/, //a-z, espacios, acentos
    Telefono: /^\d{8,10}$/, // 8 a 10
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{5,150}$/
}

const entradas = document.querySelectorAll(".entrada");

const campos = {
    fname: false,
    lname: false,
    telefono: false,
    email: false,
    paquete: false,
    mensaje: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "fname":
            if(expresiones.fname.test(e.target.value)){
                document.getElementById('msgNombre').style.opacity = 0;
                campos.fname = true;
            }else {
                document.getElementById('msgNombre').innerHTML = "Debe ingresar un nombre";
                document.getElementById('msgNombre').style.color = "#ff0000";
            }
        break;
        case "lname":
            if(expresiones.lname.test(e.target.value)){
                document.getElementById('msgApellido').style.opacity = 0;
                campos.lname = true;
            } else {
                document.getElementById('msgApellido').innerHTML = "Debe ingresar su apellido";
                document.getElementById('msgApellido').style.color = "#ff0000";
            }
        break;
        case "telefono":
            if(expresiones.Telefono.test(e.target.value)){
                document.getElementById('msgTelefono').style.opacity = 0;
                campos.telefono = true;
            } else {
                document.getElementById('msgTelefono').innerHTML = "Debe ingresar un teléfono"; 
                document.getElementById('msgTelefono').style.color = "#ff0000"; 
            }
        break;
        case "email":
            if(expresiones.email.test(e.target.value)){
                document.getElementById('msgMail').style.opacity = 0;
                campos.email = true;
            } else {
                document.getElementById('msgMail').innerHTML = "Ingresar un mail válido";
                document.getElementById('msgMail').style.color = "#ff0000";
            }
        break;
        case "paquete":
            if(paquete.selectedIndex !== 0){
                document.getElementById('msgDestino').style.opacity = 0;
                campos.paquete = true;
            } else {
                document.getElementById('msgDestino').innerHTML = ("Elija una opción");
                document.getElementById('msgDestino').style.color = ("#ff0000");
            }
        break;
        case "mensaje":
            if(expresiones.mensaje.test(e.target.value)){
                document.getElementById('msgConsulta').style.opacity = 0;
                campos.mensaje = true;
            } else {
                document.getElementById('msgConsulta').innerHTML = ("Cuál es su consulta");
                document.getElementById('msgConsulta').style.color = ("#ff0000");
            }
        break;
    };
}


inputs.forEach((entradas) => {
entradas.addEventListener('keyup', validarFormulario);
entradas.addEventListener('blur', validarFormulario);
});



formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if(campos.fname && campos.lname && campos.telefono && campos.email && campos.paquete && campos.mensaje) {
        formulario.reset();
        document.getElementById('msgEnviado').innerHTML = "Enviado con éxito";
        document.getElementById('msgEnviado').style.color = "#008f39";
    } else {
        document.getElementById('msgEnviado').innerHTML = "Por favor completá los campos";
        document.getElementById('msgEnviado').style.color = '#ff0000';
        setTimeout(() => {
           document.getElementById('msgEnviado').innerHTML = ""; 
        }, 5000); 
    }
});
