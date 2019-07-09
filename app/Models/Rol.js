const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Rol = new Schema({
	nombre:{
		type:String,
		required:true
    },	
    activo:{
		type:Boolean,
		default:true
	}
}, {collection:'rols', timestamps:true} );

module.exports = mongoose.model('rols', Rol);