const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
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
        min: 0,
        max: 5,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]
    

},
{
    timestamps: true
}
);

export default mongoose.model('Destination', destinationSchema);