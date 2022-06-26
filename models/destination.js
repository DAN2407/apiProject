const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    photo :{
        type: [String]
    },
    description: {
        type: String,
        required: true
    },
    ubication: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

const DestinationModel = mongoose.model('destination', DestinationSchema);

module.exports = DestinationModel;