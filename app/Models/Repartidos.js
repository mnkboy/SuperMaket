const mongoose = require('mongoose');

const Repartidor = new Schema({
    cuenta:{
        type: Schema.Types.ObjectId,
        ref:'cuenta'
    },
	historial:{
		type:[Schema.Types.ObjectId],
		ref:'historial'
	}

});

module.exports = mongoose.model('repartidor', Repartidor);