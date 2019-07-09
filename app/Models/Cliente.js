const mongoose = require('mongoose');

const Cliente = new Schema({
    radio_max:{
        type: number,
        require: true
    },
    cuenta:{
        type: Schema.Types.ObjectId,
        ref:'cuenta'
    },
	historial:{
		type:[Schema.Types.ObjectId],
		ref:'historial'
	}

});

module.exports = mongoose.model('cliente', Cliente);