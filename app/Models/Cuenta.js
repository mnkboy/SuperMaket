const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Cuenta = new Schema({
	nombre:{
		type:String,
		required:true
    },
    apellido:{
		type:String,
		required:true
    },
    correo:{
		type:String,
		required:true,
		unique:true
    },
    profile_picture:{
		type:String        
    },	
    nombre_usaurio:{
		type:String,
		required:true
    },
    password:{
		type: String,
		required: true
    },
    rol:{
		type:[Schema.Types.ObjectId],
		ref:'rol'
	},
    activo:{
		type:Boolean,
		default:true
	}
}, {collection:'cuentas', timestamps:true} );

module.exports = mongoose.model('cuenta', Cuenta);