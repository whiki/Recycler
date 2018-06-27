module.exports= funtion(app, passport){
   
    //onload Home page
    //get method

    app.get('/', function(req,res){
        res.render('index.ejs');
    });

    //login page
    app.get('/login', function(req, res){
        res.render ('login.ejs', {message: req.flash('loginMessage')});
    });


    //handle authentication
    //app.post('/login',blah blah)

    //signup
    app.get('/signup', function(req,res){
        res.render('signup.ejs', {message: req.flash('signupMessage')});
    })


    //handle authentication for signup
    //app.post('/signup', );

    //profile
    app.get('/profile', isLoggedIn, function(req,res){
        res.render('profile.ejs',{
            user : req.user
        })
    })

    //logout
    app.get('/logout', function(req,res){
        req.logout();
        req.redierct('/');
    })


};

function isLoggedIn(req, res,next){

    //if user ins
}