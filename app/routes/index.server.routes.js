module.exports = function (app) {

    var index = require("../controllers/index.server.controller");
    var login = require("../controllers/login.server.controller");
    var comments = require("../controllers/comments.server.controller");
    var thankyou = require("../controllers/thankyou.server.controller");
    var logout = require("../controllers/logout.server.controller");
  
    //index routes
    app.get("/", index.render);
    app.post("/",login.render);

    app.get("/comments", comments.render);
    app.post("/comments", (req, res) => {
        thankyou.render(req, res);
    });
    app.get("/thankyou", thankyou.render);
    app.get('/logout', logout.render);
};