
// function validarForm() {
//     let datos_ok = false;
//     const form = document.getElementsByTagName("form")[0];
//     const msgNombre = document.getElementById("msgNombre");
//     const msgApellido = document.getElementById("msgApellido");
//     const msgTelefono = document.getElementById("msgTelefono");
//     const msgMail = document.getElementById("msgMail");
//     const msgDestino = document.getElementById("msgDestino");
//     const msgConsulta = document.getElementById("msgConsulta");
//     console.log(form);
//     //validar nombre
//     const nombre = form[1].value;
//     if (nombre.length < 2) {
//         msgNombre.innerHTML = "Debe ingresar un nombre válido";
//         msgNombre.style.color = "#cc0000";
//         form[1].focus;
//         datos.ok = false;
//     } else {
//         datos_ok = true;
//     }
//     //validar apellido
//     const apellido = form[2].value;
//     if (apellido.length<2){
//         msgApellido.innerHTML = "Debe ingresar un apellido válido";
//         form[2].focus;
//         datos_ok=false;
//     }else{
//         datos_ok=true;
//     }
//     //validar telefono
//     const telefono = form[4].value;
//     if (telefono.length != 10){
//         msgTelefono.innerHTML = "Debe ingresar los 10 números correspondientes";
//         form[4].focus;
//         datos_ok=false;
//     }else{
//         datos_ok=true;
//     }
//     //validar destino
//     if (form[7].selectedIndex == 0){
//         msgDestino.innerHTML = "Debe seleccionar un destino";
//         form[7].focus;
//         datos_ok=false;
//     }else{
//         datos_ok=true;
//     }
//     //validar mensaje
//     const consulta = form[9].value;
//     if (consulta.length == 0){
//         msgConsulta.innerHTML = "Ingrese un mensaje";
//         form[9].focus;
//         datos_ok=false;
//     }else{
//         datos_ok=true;
//     }
//     if(datos_ok){
//         alert("Formulario enviado exitosamente!!")
//     }
    

// }
// document.getElementById("form").addEventListener('submit', (event)=>{
//     event.preventDefault();
// });
