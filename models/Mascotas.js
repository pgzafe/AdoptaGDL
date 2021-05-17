const mongoose = require('mongoose');

let mongoDB = 'mongodb+srv://server:root@adoptagdl.chtkc.mongodb.net/AdoptaGDL?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

let mascotaSchema = mongoose.Schema({
    Nombre: {
        type: String,
        lowercase: true,
        trim: true
    },
    CorreoDueno: {
        type: String,
        lowercase: true,
        trim: true
    },
    Raza: {
        type: String,
        lowercase: true,
        trim: true
    },
    Tamano: {
        type: String,
        lowercase: true,
        trim: true
    },
    Estado: {
        type: String,
        lowercase: true,
        trim: true
    },
    Edad: {
        type: String,
        lowercase: true,
        trim: true
    },
    Sexo: {
        type: String,
        lowercase: true,
        trim: true
    },
    URL: {
        type: String,
        lowercase: true,
        trim: true
    }
});

let Mascota = mongoose.model('mascota', mascotaSchema);

//Editar Mascota

//Borrar Mascota

//Conseguir todas las mascotas

//const User = mongoose.model('users', userSchema);
module.exports = mongoose.model('Mascotas', mascotaSchema);
module.exports = Mascota;
