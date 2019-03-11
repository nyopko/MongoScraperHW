//dependencies
const express = require(`express`);
const exphbs = require(`express-handlebars`);
const mongoose = require(`mongoose`);
const axios = require(`axios`);
const cheerio = require(`cheerio`);

//models
// const db = require('./models');

//activate express
const app = express();

//PORT
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`public`));

//handlebars
app.engine(`handlebars`, exphbs({ defaultLayout: `main` }));
app.set('view engine', 'handlebars');

//routes
require(`./routes/routes`)(app);

//mongoDB
const MONGODB_URI = process.env.MONGODB_URI || `mongodb://localhost/mongoHeadlines`;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

// Start the server
app.listen(PORT, () => {
    console.log(`App running on port ` + PORT + `!`);
});

module.exports = app;