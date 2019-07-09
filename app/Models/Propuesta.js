const mongoose = require('mongoose');

const Propuesta = new Schema({
    vendedor:{
        type: Schema.Types.ObjectId,
        ref:'vendedor'
    },
    perido:{
        type: Schema.Types.ObjectId,
        ref:'pedido'
    },
    cliente:{
        type:Schema.Types.ObjectId,
        ref:'cliente'
    },
    monto:{
        type:number,
        require:true
    },
    aceptado:{
        type:Boolean,
		default:false
    },
    fecha_compra:{
        type:Date
    },
	activo:{
		type:Boolean,
		default:true
	}

});

module.exports = mongoose.model('propuesta', Propuesta);