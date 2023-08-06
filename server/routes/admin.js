const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcryptjs = require('bcryptjs'); // Add this line to import bcrypt

const adminLayout = '../views/layouts/admin'
router.use(express.urlencoded({ extended: true }));

router.get('/login', async (req, res) => {
    try{
        const locals = {
            title: "MVX - Admin", //according to the 2nd video, 5:43
            description: "Admin page for MVX"
        }

        res.render('admin/login', {locals, layout: adminLayout});
    } catch (error){
        console.log(error);
    }
});

router.get('/register', async (req, res) => {
    try{
        const locals = {
            title: "MVX - Admin", //according to the 2nd video, 5:43
            description: "Admin page for MVX"
        }

        res.render('admin/register', {locals, layout: adminLayout});
    } catch (error){
        console.log(error);
    }
});


router.post('/register', async (req, res) => {
    try{
        const {username, email, password} = req.body;
        const hashedPassword = await bcryptjs.hash(password, 10);

        try {
            const user = await User.create({ username, email, password: hashedPassword});
            console.log(user);
            res.status(201).json({ message: 'User Created', user}) //for testing purposes
        } catch (error) {
            if(error.code === 11000){
                res.status(409).json({message: 'User already in use'});
            }
            console.log("->",error);
            res.status(500).json({message: 'Internal server error'});
        }

    } catch (error){
        console.log(error);
    }
});

router.post('/login', async (req, res) => {
    const {email, password } = req.body;
    const user = await User.findOne({ email});
  
    if (user && await bcryptjs.compare(password, user.password)) {
    //   req.session.userId = user._id;
      res.redirect('/home');
    } else {
      res.redirect('/login');
      console.log("wrong password");
    }
  });





module.exports = router;