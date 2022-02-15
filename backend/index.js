const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectToDb = require('./db/connect');
const modelRouter = require('./routes/model');

app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectToDb();

// Routes
app.use('/api/model', modelRouter);

// Start the server
app.listen(5000, () => {
	console.log('Server started on port 5000');
});