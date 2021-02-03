exports.render = function ( req, res) {
    //var username = req.body.username;
    var session = req.session;
    session.username= req.body.username;

    if(session.username){
        res.redirect("/comments");
        console.log("Index.Server.Controller - User name = " + session.username);
    }else{
        res.render("index", {
            title : "Login Page"        
        }); 
        console.log("Index.Server.Controller - User name = " + session.username);
    }
};