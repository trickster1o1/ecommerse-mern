import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, time: {
        type: Number,
        required: true
    }, image: {
        type: String,
        required: true
    }, thumb: {
        type: String,
        required: false
    }, tag: {
        type: String,
        required: true
    }, category: {
        type: String,
        required: true
    }, release: {
        type: String,
        required: true
    }, banner: {
        type: Boolean,
        default: false
    }, description : {
        type: String,
        required: false
    }, rating: {
        type: Number,
        default: 0
    }, slug: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

const Movie = mongoose.model('Movie', movieSchema);
export default Movie;