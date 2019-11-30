const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: 'string',
    rating: 'number',
    dateReleased: 'string',
    posterURL: 'string'
})

module.exports = mongoose.model('Movie', MovieSchema);