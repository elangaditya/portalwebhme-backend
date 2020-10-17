const router = require("express").Router();

router.get("/submit", (req, res) => {
    // Display form submit post
    res.send("Display form submit post");
})

module.exports = router;