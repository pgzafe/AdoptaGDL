const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');

let mongoDB = 'mongodb+srv://server:root@adoptagdl.chtkc.mongodb.net/AdoptaGDL?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true });

let userSchema = mongoose.Schema({
    Nombre: {
        type: String,
        lowercase: true,
        trim: true
    },
    Apellido: {
        type: String,
        lowercase: true,
        trim: true
    },
    Correo: {
        type: String,
        lowercase: true,
        trim: true
    },
    Celular: {
        type: String,
        lowercase: true,
        trim: true
    },
    Sexo: {
        type: String,
        lowercase: true,
        trim: true
    },
    Contrasena: {
        type: String,
        lowercase: true,
        trim: true
    },
    ConfContrasena: {
        type: String,
        lowercase: true,
        trim: true
    }
});

const saltRounds = 10;
/*
userSchema.pre('save', function(next){
    if(this.isNew || this.idModified('Contrasena')){
        const doc = this;
        bcrypt.hash(doc.password, saltRounds, (err, hashedPassword) => {
            if(err){
                next(err);
            }else {
                doc.password = hashedPassword;
                next();
            }
        });
    }
    else {
        next();
    }
});*/

let User = mongoose.model('user', userSchema);

//Get users
/*
userSchema.methods.isCorrectPassword = function(password, callback){
    bcrypt.compare(password, this.Contrasena, function(err, same){
        if(err){
            callback(err);
        }else {
            callback(err, same);
        }
    });
}*/

//const User = mongoose.model('users', userSchema);
module.exports = mongoose.model('Users', userSchema);
module.exports = User;
