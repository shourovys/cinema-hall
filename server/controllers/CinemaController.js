// const FoodItem = require('../Models/FoodItemsModel');
const Cinema = require('../Models/CinemaModel');

const CinemaController = {};

CinemaController.addCinema= (req, res) => {
    const cinema = new Cinema(req.body);
    cinema
        .save()
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    res.send('success');
};

CinemaController.getAllCinema = (req, res) => {
    console.log('come');
    Cinema.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

CinemaController.getSingleCinema = (req, res) => {
    const { id: _id } = req.params;
    Cinema.findById(_id)
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};

CinemaController.updateCinema = (req, res) => {
    const { id } = req.params;

    const updatedCinema = req.body;

    Cinema.findByIdAndUpdate(id, updatedCinema, { new: true })
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
};



module.exports = CinemaController;