const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDb = require('./db/connect');
const modelRouter = require('./routes/model');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// Connect to the database
connectToDb();

// Routes
app.use('/api/model', modelRouter);

// Start the server
const PORT = process.env.PORT || 7070;
app.listen(PORT, () => {
	console.log('Server started on port PORT', PORT);
});