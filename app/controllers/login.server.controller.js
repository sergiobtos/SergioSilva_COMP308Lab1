exports.render = function (req, res) {
    var session = req.session;
    session.username = req.body.username;
    console.log("Login.Server.Controller - User name = " + session.username);
      res.redirect("/comments");
}