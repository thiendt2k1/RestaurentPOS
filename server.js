// server.js
const express = require('express');


// Define Express App
const app = express();
const PORT = process.env.PORT || 8888;


app.use(express.static('public'));
app.use(express.static('images'));
app.use('/static', express.static('public'))

// Serve Static Assets
app.use(express.static('public'));

app.listen(PORT, () => {
    console.log('Server connected at:', PORT);
});