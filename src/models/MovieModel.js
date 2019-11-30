const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: 'string',
    rating: 'number',
    dateReleased: 'string',
    posterURL: 'string',
    movieID: 'number'
})

module.exports = mongoose.model('Movie', MovieSchema);