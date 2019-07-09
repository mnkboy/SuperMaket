const mongoose = require('mongoose');

const Venta = new Schema({
    descripcion:{
        type: String,
        require: true
    },
    propuesta:{
        type: Schema.Types.ObjectId,
        ref:'propuesta'
    },
    entregado:{
        type:Boolean,
		default:false
    },
    pagado:{
        type:Boolean,
		default:false
    },
    finalizado:{
         type:Boolean,
		default:false
    }

});

module.exports = mongoose.model('venta', Venta);