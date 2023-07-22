const express = require('express');
const router = express.Router();

//Routes
//These are what allow the overall site to gain access to separate pages
    //First parameter of .get and .render is just the name of the .ejs file being called
router.get('', (req, res) => {
    const locals = {
        title: "MVX - Get Started", //according to the 2nd video, 5:43
        description: "Landing page for MVX"
    }

    res.render('index', {locals});
});

router.get('/aboutUs', (req, res) => {
    res.render('aboutUs');
});

module.exports = router;