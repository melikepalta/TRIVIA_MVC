const express = require('express');
const app = express();
const path = require('path');
const startPointRoute = require('./app/start-point/start-point.route.js');
const quizRoute = require('./app/quiz/quiz.route.js'); //imported the quiz route

// Setup Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Use the start-point route
app.use('/start-point', startPointRoute);
app.use('/quiz', quizRoute); //used the quiz route

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
