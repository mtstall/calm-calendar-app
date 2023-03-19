const router = require("express").Router();
const { User } = require("../../models");

// CREATE new user
router.post("/signup", async (req, res) => {
  try {
    console.log("hitting the signup post route")
    const dbUserData = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    //store session
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = dbUserData.email;
      req.session.password = dbUserData.password;
      req.session.user_id = dbUserData.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//Get route for user info
router.get("/", async (req, res) => {
  try {
    const dbUserData = await User.findAll({});
    res.status(200).json(dbUserData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    //validate user password
    const userData = dbUserData.get({ plain: true });
    const validPassword = req.body.password === userData.password;
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    //store session for userdata
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = req.body.email;
      req.session.user_id = userData.id;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout post route
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
