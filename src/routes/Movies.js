const router = require("express").Router();
const MovieModel = require('../models/MovieModel');

router.get("/", async (req, res, next) => {
    try {
        const results = await MovieModel.find().exec();
        return res.status(200).json(results);
    } catch(err) {
        return res.status(500).json({
            error: err
        });
    } 
});

router.post("/", (req, res, next) => {
    if (!req.body.title || !req.body.dateReleased ||
        !req.body.rating || !req.body.posterURL) {
        return res.status(500).json({
            success: false
        });
    } else {
        const movie = new MovieModel({
            movieID: req.body._id,
            title: req.body.title,
            rating: req.body.rating,
            dateReleased: req.body.dateReleased,
            posterURL: req.body.posterURL
        });
        movie.save().then(() => {
            res.status(200).json({
                success: true,
                movie: movie
            }).status(200);
        }).catch((err) => {
            res.status(500).json({
                success: false
            }).status(500);
        })
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        await MovieModel.findOneAndDelete({
            movieID: req.params.id
        }).exec();
        return res.status(200).json({ success: true })
    } catch (err) {
        return res.status(500).json({ success: false })
    }
})

module.exports = router;