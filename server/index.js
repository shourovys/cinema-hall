const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cinemaRouter = require('./Routers/CinemaRouter');


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// app.use('/posts', postRoutes);
app.use('/cinema', cinemaRouter);

app.get('/',(req,res)=>res.send('welcome to Cinema-Hall'))

const CONNECTION_URL = 'mongodb+srv://readRight:readRight@cluster0.vb8a7.mongodb.net/cinemaholl?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);