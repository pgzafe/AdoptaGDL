const User = require('../models/Users');
const Mascota = require('../models/Mascotas');
const MascotaPerdida = require('../models/MascotasPerdidas');

exports.home = (req, res) => {
    //res.send("Home ----- AdoptaGDL_ProyectoFinal_PabloJaniceCrespunk");
    res.render('master')
}

/*exports.adopciones = (req, res) => {
    //res.send("Adopciones ----- AdoptaGDL_ProyectoFinal_PabloJaniceCrespunk");
    res.render('adopciones', {})
}*/

exports.mismascotas = (req, res) => {
    //res.send("Mis Mascotas ----- AdoptaGDL_ProyectoFinal_PabloJaniceCrespunk");
    res.render('mismascotas')
}

exports.mascotasperdidas = (req, res) => {
    //res.send("Mis Mascotas ----- AdoptaGDL_ProyectoFinal_PabloJaniceCrespunk");
    res.render('mascotasperdidas')
}

exports.masinfo = (req, res) => {
    //res.send("Mis Mascotas ----- AdoptaGDL_ProyectoFinal_PabloJaniceCrespunk");
    res.render('masinfo')
}

exports.agregarUsuario = async (req, res, next) => {
    let respuesta;
    let newUser = {
        Nombre: req.body.Nombre,
        Apellido: req.body.Apellido,
        Celular: req.body.Celular,
        Correo: req.body.Correo,
        Contrasena: req.body.Contrasena,
        ConfContrasena: req.body.ConfContrasena,
        Sexo: req.body.Sexo
    };
    //let user = User(newUser);
    //user.save().then((doc)=> console.log(doc));
    try {
        let user = User(newUser);
        user.save().then((doc)=> console.log(doc));
        //console.log(user);
        respuesta = {
            status: 201,
            mensaje: "Usuario Agregado exitosamente"
        }
    } catch (error) {
        console.log(error);
        respuesta = {
            status: 400,
            error: "Hubo un error"
        }
    }
    res.json(respuesta);
    next();
}

exports.agregarMascota = async (req, res, next) => {
    let respuesta;
    let newMascota = {
        Nombre: req.body.Nombre,
        Raza: req.body.Raza,
        CorreoDueno: req.body.CorreoDueno,
        Tamano: req.body.Tamano,
        Estado: req.body.Estado,
        Edad: req.body.Edad,
        Sexo: req.body.Sexo,
        CelularDueno: req.body.CelularDueno,
        URL: req.body.URL
    };
    
    try {
        let mascota = Mascota(newMascota);
        mascota.save().then((doc)=> console.log(doc));
        //console.log(user);
        respuesta = {
            status: 201,
            mensaje: "Mascota Agregada exitosamente"
        }
    } catch (error) {
        console.log(error);
        respuesta = {
            status: 400,
            error: "Hubo un error"
        }
    }
    res.json(respuesta);
    next();
}
/*
exports.login = async (req, res, next) => {
    //console.log(req.body.CorreoLogin);
    let respuesta;
    let loginUser = {
        Correo: req.body.CorreoLogin,
        Contrasena: req.body.ContrasenaLogin.toLowerCase()
    }
    console.log(loginUser);
    let c1, pas1;
    
    try {
        let temp = await User.find({'Correo': loginUser.Correo, 'Contrasena': loginUser.Contrasena}, (err, docs) => {
            pas1 = docs[0].Contrasena;
            c1 = docs[0].Correo;
        });
        if(loginUser.Contrasena == pas1){
            respuesta = {
                status: 201,
                mensaje: "Ingreso Exitoso"
            }
        }
        else{
            respuesta = {
                status: 400,
                error: "Hubo un error al iniciar sesión else"
            }
        }
    } catch (error) {
        console.log(error);
        respuesta = {
            status: 400,
            error: "Hubo un error al iniciar sesión Catch"
        }
    }
    res.json(respuesta);
    next();
} 
*/
exports.adopciones = async (req, res) => {
    let mascotas = [];
    let temp = await Mascota.find({}, (err, docs) => {
        mascotas.push(docs);
    });
    console.log(mascotas);
    res.render('adopciones', {
        mascotasLista: mascotas
    })
}

exports.agregarMascotaPerdida = async (req, res, next) => {
    let respuesta;
    let newMascota = {
        Nombre: req.body.Nombre,
        NombreDueno: req.body.NombreDueno,
        ApellidoDueno: req.body.ApellidoDueno,
        Raza: req.body.Raza,
        CorreoDueno: req.body.CorreoDueno,
        Tamano: req.body.Tamano,
        Estado: req.body.Estado,
        Edad: req.body.Edad,
        Sexo: req.body.Sexo,
        CelularDueno: req.body.CelularDueno,
        URL: req.body.URL
    };
    console.log(newMascota);
    try {
        let mascota = MascotaPerdida(newMascota);
        mascota.save().then((doc)=> console.log(doc));
        respuesta = {
            status: 201,
            mensaje: "Mascota Perdida Agregada exitosamente"
        }
    } catch (error) {
        console.log(error);
        respuesta = {
            status: 400,
            error: "Hubo un error"
        }
    }
    res.json(respuesta);
    next();
}
/*
exports.login = async (req, res, next) => {
    let respuesta;
    let c1 = req.body.CorreoLogin;
    let pas1 = req.body.ContrasenaLogin.toLowerCase();
    
    User.findOne({c1}, (err, user) =>{
        if(err){
            respuesta = {
                status: 500,
                error: "Hubo un error al iniciar sesion"
            }
        } else if(!user){
            respuesta = {
                status: 500,
                error: "Usuario inexistente"
            }
        } else{
            user.isCorrectPassword(pas1, (err, result) => {
                if(err){
                    respuesta = {
                        status: 500,
                        error: "Hubo un error al iniciar sesion con el password dado"
                    }
                } else if(result){
                    respuesta = {
                        status: 200,
                        error: "Usuario autenticado correctamente"
                    }
                } else {
                    respuesta = {
                        status: 500,
                        error: "Usuario Y/O Contraseña incorrecta"
                    }
                }
            });
        }
    })
    res.json(respuesta);
    next();
}*/