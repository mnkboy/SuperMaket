const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const Pedido = new Schema({
    products:{
		type:[String],
		required:true
    },
    cliente:{
		type:[Schema.Types.ObjectId],
		ref:'cliente'
    },
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
}, {collection:'pedidos', timestamps:true} );

module.exports = mongoose.model('pedido', Pedido);