const router = require("express").Router();
const MovieModel = require('../models/MovieModel');

router.get("/", async (req, res, next) => {
    try {
        const results = await MovieModel.find().exec();
        res.json(results).status(200);
        return next();
    } catch(err) {
        res.json({
            error: err
        }).status(500);
        return next(err);
    } 
});

router.post("/", (req, res, next) => {
    if (!req.body.title || !req.body.dateReleased ||
        !req.body.rating || !req.body.posterURL) {
        res.json({
            success: false
        }).status(500);
        
        return next("Missing proporties on the body")
    } else {
        const movie = new MovieModel({
            title: req.body.title,
            rating: req.body.rating,
            dateReleased: req.body.dateReleased,
            posterURL: req.body.posterURL
        });
        movie.save().then(() => {
            res.json({
                success: true
            }).status(200);
            return next();
        }).catch((err) => {
            res.json({
                success: false
            }).status(500);
            return next(err);
        })
    }
});

router.delete("/:id", (req, res, next) => {
    try {
        MovieModel.findByIdAndDelete(req.params.id).exec();
        res.json({ success: true }).status(200);
        return next();
    } catch (err) {
        res.json({ success: false }).status(500);
        return next(err);
    }
})

module.exports = router;