const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Permiso = new Schema({
	nombre:{
		type:String,
		required:true
    },	
    activo:{
		type:Boolean,
		default:true
	},
	rol:{
		type:[Schema.Types.ObjectId],
		ref:'rol'
	}

}, {collection:'permisos', timestamps:true} );

module.exports = mongoose.model('permiso', Permiso);