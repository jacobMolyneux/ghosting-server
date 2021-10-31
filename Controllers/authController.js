const User = require("../Models/userModel");

exports.CreateUser = function (req, res, next) {
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  }).save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

passport.use(
  new LocalStrategy((username, password, done) =>
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: "Incorrect Username!" });
      }
      if (user.password !== password) {
        return done(null, false, { message: "Incorrect Password!" });
      }
      return done(null, user);
    })
  )
);
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

exports.LogIn = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
});
