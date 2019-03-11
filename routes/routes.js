const controller = require(`../controller/controller`);

module.exports = (app) => {
    app.get(`/`, controller.index);

    // Render 404 page for any unmatched routes
    app.get("*", controller.wrongRoute);

};