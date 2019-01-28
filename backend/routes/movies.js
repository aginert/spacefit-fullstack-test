var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('passport');

router.get('/', (req, res) => {
    // get all movies with its actors
    models.Movie.findAll({
        include: [
            {
                model: models.Actor
            },{
                model: models.Genre
            },
        ]
    })
    .then(movies => {
        res.status(200).json({
            error: false,
            data: movies
        })
    })
});


router.get('/search', (req, res) => {
    //search
    models.Movie.findAll({
        where: {
            title: {
                $like: '%' + req.query.title + '%'
            }
        },
        include: [
            {
                model: models.Actor
            },{
                model: models.Genre
            },
        ]
    })
        .then(movies => {
            res.status(200).json({
                error: false,
                data: movies
            })
        })

});



module.exports = router;
