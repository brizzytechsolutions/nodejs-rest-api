const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/router');
const app = express();
const cors = require('cors');


const corsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', cors(corsOptions), routes);


mongoose.connect('mongodb://localhost:27017/inventorydb', {
  useNewUrlParser: true
    // useUnifiedTopology: true,
}).then(console.log('Connected to MongoDb Successfully'))
.catch(error => console.log('Failed to connect to MongoDb', error));

app.listen(3000, (req, res) => {
    console.log('Server running port 3000');
});
