//import router
const router = require("express").Router();

// get route for homepage
router.get("/", (req, res) => {
  try {
    console.log(req.session);

    //render landing page
    res.render("all", {
      title: "Calm Calendar",
      loggedIn: req.session.loggedIn,
      email: req.session.email,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
