exports.render = function ( req, res) {
    var session = req.session;

    if(session.username){
        res.render("comments", {
            title : "Comments Page",
            username : session.username,        
        });
    }else{
        res.write('<h1>Please login first.</h1>');
        res.end('<a class="btn btn-primary" role="button" href=' + '/' + '>Login</a>');
    }
    
};