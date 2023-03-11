//dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exhbs = require("express-handlebars");
// const helpers = require("./components/helpers");
const hbs = exhbs.create({});

//iniitialize express app
const app = express();
const PORT = process.env.PORT || 3001;
console.log("Hello hello");

//initalize sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//initializes routes
// const userRoute = require("./routes/api/UserRoutes");
const indexRoute = require("./routes/indexRoutes");

// Set up sessions
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
console.log("What's going on?");

app.use(session(sess));

//sets up express-handlebars
app.engine("handlebars", hbs.engine);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(indexRoute);
// app.use(userRoute);
console.log("I've made it down here");

//starts the server to begin listening

app.listen(PORT, () => console.log("Server is now listening, yay: "));
