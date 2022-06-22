var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");
var passport = require("passport");

var app = express();
var userRouter = require("./routers/user");
var destinationRouter = require("./routers/destination");
var authRouter = require("./routers/auth");

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

passport.authenticate("jwt", { session: false });
app.use("/users", userRouter);
app.use("/destinations", destinationRouter);
app.use(authRouter);



module.exports = app;