const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const admin = require('./routes/api/admin');
const news = require('./routes/api/news');
const topNews = require('./routes/api/topNews');
const bangladesh = require('./routes/api/bangladesh');

const app = express();

app.use(cors());
app.use(express.json());

const db = process.env.MONGO_URI;

mongoose.
    connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

app.use('/api/admin', admin);
app.use('/api/news', news);
app.use('/api/topNews', topNews);
app.use('/api/bangladesh', bangladesh);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server started in port ${port}`))