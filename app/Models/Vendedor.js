const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Vendedor = new Schema({
    longitud:{
		type: Float,
		required:true
    },
    latitud:{
        type: Float,
        required:true
    },
    activo:{
		type:Boolean,
		default:true
	}
}, {collection:'vendedors', timestamps:true} );

module.exports = mongoose.model('vendedor', Vendedor);