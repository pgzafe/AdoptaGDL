"user strict";

const mongo = "mongodb+srv://server:root@adoptagdl.chtkc.mongodb.net/AdoptaGDL?retryWrites=true&w=majority";

//******************* */
//REGISTRO DE USUARIOS
//******************* */
let registrarUser = document.querySelector('#formRegistro');
let btnRegistrar = document.getElementById('btnRegistrar');

registrarUser.addEventListener('change', function(e){
    let invalidField = document.querySelectorAll("#formRegistro input:invalid");
    if(invalidField.length != 0){
        btnRegistrar.setAttribute("disabled", "");
    }
    else{
        if(document.getElementById("Contrasena").value == document.getElementById("ConfContrasena").value){
            btnRegistrar.removeAttribute("disabled");    
        }
        else{
            btnRegistrar.setAttribute("disabled", "");
        }
    }
    e.preventDefault();
});

registrarUser.addEventListener('submit', async e => {
    e.preventDefault();
    let sexo;
    console.log(e.target);
    if(document.querySelector('#Hombre').value != undefined) {
        sexo =  document.querySelector('#Hombre').value
    }
    else {
        sexo = document.querySelector('#Mujer').value
    }
    let user = {
        Nombre: document.querySelector('#Nombre').value,
        Apellido: document.querySelector('#Apellido').value,
        Correo: document.querySelector('#Correo').value,
        Celular: document.querySelector('#Celular').value,
        Contrasena: document.querySelector('#Contrasena').value,
        ConfContrasena: document.querySelector('#ConfContrasena').value,
        Sexo: sexo
    }

    console.log(e.target);
    let respuesta = await fetch(e.target.action, {
        method: e.target.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
    });

    let resultado = await respuesta.json();
    console.log(resultado);
});
//*******************
//REGISTRO DE MASCOTAS
//*******************
let registrarMascota = document.querySelector('#formRegistroMascota');
let btnRegistrarMascota = document.getElementById('btnRegistrarMascota');

registrarMascota.addEventListener('change', function(e){
    let invalidField = document.querySelectorAll("#formRegistroMascota input:invalid");
    if(invalidField.length != 0){
        btnRegistrarMascota.setAttribute("disabled", "");
    }
    else{
        btnRegistrarMascota.removeAttribute("disabled");    
    }
    e.preventDefault();
});

registrarMascota.addEventListener('submit', async e => {
    e.preventDefault();
    let sexo;
    console.log(e.target);
    if(document.querySelector('#Macho').value != undefined) {
        sexo =  document.querySelector('#Macho').value
    }
    else {
        sexo = document.querySelector('#Hembra').value
    }
    let user = {
        Nombre: document.querySelector('#NombreMascota').value,
        CorreoDueno: document.querySelector('#CorreoDueno').value,
        Raza: document.querySelector('#RazaMascota').value,
        Tamano: document.querySelector('#TamanoMascota').value,
        Estado: document.querySelector('#EstadoMascota').value,
        Sexo: sexo,
        Edad: document.querySelector('#EdadMascota').value,
        URL: document.querySelector('#UrlMascota').value
    }

    console.log(e.target);
    let respuesta = await fetch(e.target.action, {
        method: e.target.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) 
    });

    let resultado = await respuesta.json();
    console.log(resultado);
});
//***************** */
//LOGIN USUARIO
//***************** */

let login = document.querySelector('#formLogin');
let btnLogin = document.getElementById('btnLogin');

login.addEventListener('change', function(e){
    let invalidField = document.querySelectorAll("#formLogin input:invalid");
    if(invalidField.length != 0){
        btnLogin.setAttribute("disabled", "");
    }
    else{
        btnLogin.removeAttribute("disabled");    
    }
    e.preventDefault();
});

btnLogin.addEventListener('click', async e => {
    e.preventDefault();
    //console.log(e.target);
    let loginUser = {
        CorreoLogin: document.getElementById("CorreoLogin").value,
        ContrasenaLogin: document.getElementById("ContrasenaLogin").value
    }
    let respuesta = await fetch(e.target.action, {
        method: e.target.method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginUser)
    });
    let resultado = await respuesta.json();
    console.log("Hola" + resultado);
});


