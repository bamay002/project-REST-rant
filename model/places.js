//IMPORT MONGOOSE
const mongoose = require('mongoose')
const { Schema } = mongoose;

const placeSchema = new Schema({
    name: {type: String, required: true },
    pic: {type: String},
    cuisines: {type: String, required: true },
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: {type: Number}
})

placeSchema.methods.showEstablished = function() {
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}

module.exports = mongoose.model('Place', placeSchema)


/*module.exports = [{
    name: '444',
    city: 'Malibu',
    state: 'California',
    cuisines: 'Birria Tacos',
    pic: '/images/birria.jpeg'
}, {
    name:'Cravez',
    city:'Anaheim',
    state:'California',
    cuisines:'Mexican Snacks',
    pic:'/images/snacks.jpeg'
}]
*/