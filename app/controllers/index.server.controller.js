exports.render = function ( req, res) {
    var username = req.body.username;
    var session = req.session;

    session.username= username;

    res.render("index", {
        title : "Login Page"        
    });
};