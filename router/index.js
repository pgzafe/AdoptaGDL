const express = require('express');
const mongo = "mongodb+srv://server:root@adoptagdl.chtkc.mongodb.net/AdoptaGDL?retryWrites=true&w=majority";
const router = express.Router();
const AdoptaGDLControllers = require('../controllers/AdoptaGDLControllers');

module.exports = () => {
    router.get('/', AdoptaGDLControllers.home);
    router.get('/adopciones', AdoptaGDLControllers.adopciones);
    router.post('/adopciones', AdoptaGDLControllers.agregarUsuario);
    //LOGIN
    //router.post('/adopciones:login', AdoptaGDLControllers.login);
    router.post('/adopciones:agregarmascota', AdoptaGDLControllers.agregarMascota);
    router.post('/mismascotas:agregarmascota', AdoptaGDLControllers.agregarMascota);
    router.post('/mascotasperdidas:agregarmascotaperdida', AdoptaGDLControllers.agregarMascotaPerdida);
    router.get('/mismascotas', AdoptaGDLControllers.mismascotas);
    router.get('/mascotasperdidas', AdoptaGDLControllers.mascotasperdidas);
    router.get('/masinfo', AdoptaGDLControllers.masinfo);
    return router;
}