const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {type:String, required: true},
    age: {type:Number, default: 15},
    club: {type:String, default: 'scout'},
    contract: {type:Number, default: 1}, 
    position: {type:String},
}, {
    timestamps: true
})

module.exports = mongoose.model('Fifa', playerSchema)