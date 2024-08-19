require('dotenv').config();
const express = require('express');
var createError = require('http-errors');
const app = express();
const cors = require('cors');
app.use(cors());

// Parse JSON requests
app.use(express.json());

// Routes
const postDataCollectionRoute = require('./routes/postDataCollection');
app.use('/post-event-data-collection', postDataCollectionRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

const PORT = process.env.POST_EVENT_DATA_COLLECTION_PORT || 3008;

// Start the server
app.listen(PORT, () => {
    console.log(`CORS-enabled Server is running on port ${PORT}`);
});

