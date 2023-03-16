const {Schema, model} = require('mongoose');

const ScoreSchema = new Schema({
    player: {
        type: String,
        required: true
    },
    mode:{
        type: String,
        required: true
    },
    size:{
        type: Number,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    
}, {timestamps:true })

let Score = model('score', ScoreSchema);
module.exports = Score;

