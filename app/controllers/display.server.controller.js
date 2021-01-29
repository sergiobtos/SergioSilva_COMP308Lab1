exports.render = function ( req, res) {
    var session = req.session;

    res.render("display", {
        title : "Comments Page",
        username : session.username,        
    });
};