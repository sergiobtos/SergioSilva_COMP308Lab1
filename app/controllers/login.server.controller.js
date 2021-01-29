exports.render = function (req, res) {
    var session = req.session;
    session.username = req.body.username;
  
    res.redirect("/display");
  };