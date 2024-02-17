// index.js
const express = require('express');
const app = express();
const port = 3000;

// Sample data
const countries = [
    "Argentina", "Australia", "Brazil", "Canada", "China", "Colombia",
    "Egypt", "France", "Germany", "India", "Japan", "Mexico", "New Zealand",
    "Nigeria", "Papua New Guinea", "South Africa", "United Kingdom", "United States"
];

const modalities = [
    { name: 'Coal', consumption: getRandomConsumption() },
    { name: 'Gas', consumption: getRandomConsumption() },
    { name: 'Hydro', consumption: getRandomConsumption() },
    { name: 'Nuclear', consumption: getRandomConsumption() },
    { name: 'Oil', consumption: getRandomConsumption() },
    { name: 'Solar', consumption: getRandomConsumption() },
    { name: 'Wind', consumption: getRandomConsumption() }
];

function getRandomConsumption() {
    return Math.floor(Math.random() * (500000 - 10000 + 1)) + 10000;
}

// Set view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Render home page
app.get('/', (req, res) => {
    res.render('index', { countries, modalities });
});

// Handle form submission
app.post('/', (req, res) => {
    // Handle form submission logic here
    console.log('Form submitted:', req.body);
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
