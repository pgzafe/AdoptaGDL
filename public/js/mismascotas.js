"user strict";


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