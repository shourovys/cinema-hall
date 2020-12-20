const express = require('express');
const {
    addCinema,
    getAllCinema,
    getSingleCinema,
    updateCinema
} = require('../Controllers/CinemaController');

const cinemaRouter = express.Router();
cinemaRouter.post('/add', addCinema);

cinemaRouter.get('/all', getAllCinema);

cinemaRouter.get('/:id', getSingleCinema);

cinemaRouter.patch('/:id', updateCinema);

module.exports = cinemaRouter;