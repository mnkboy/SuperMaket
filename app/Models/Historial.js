const mongoose = require('mongoose');

const Historial = new Schema({
    cliente:{
        type: Schema.Types.ObjectId,
        ref:'cliente'
    },
    venta:{
        type: Schema.Types.ObjectId,
        ref:'venta'
    },
	activo:{
		type:Boolean,
		default:true
	}

});

module.exports = mongoose.model('historial', Historial);