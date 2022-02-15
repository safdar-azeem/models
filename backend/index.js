const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectToDb = require('./db/connect');

app.use(bodyParser.urlencoded({ extended: true }));
connectToDb();

app.get('/', (req, res) => {
    res.send('Hello World');
})

// Start the server
app.listen(5000, () => {
	console.log('Server started on port 5000');
});