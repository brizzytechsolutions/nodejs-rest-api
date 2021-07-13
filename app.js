const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/router');
const app = express();

app.use(express.json());
app.use('/', routes);

mongoose.connect('mongodb://localhost:27017/inventorydb', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
}).then(console.log('Connected to MongoDb Successfully'))
.catch(error => console.log('Failed to connect to MongoDb'));

app.listen(3000, (req, res) => {
    console.log('Server running port 3000');
})