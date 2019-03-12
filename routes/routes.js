const controller = require("../controller/controller");

module.exports = (app) => {
    app.get("/", controller.index);

    app.get("/scrape", controller.scrape);
    // Render 404 page for any unmatched routes
    app.get("*", controller.wrongRoute);

};