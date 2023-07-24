const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

const adminLayout = '../views/layouts/admin'

router.get('/admin', async (req, res) => {
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



router.post('/register', async (req, res) => {
    try{

        const {username, password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await User.create({ username, password: hashedPassword });
            res.status(201).json({ message: 'User Created', user}) //for testing purposes
        } catch (error) {
            if(error.code === 11000){
                res.status(409).json({message: 'User already in use'});
            }
            res.status(500).json({message: 'Internal server error'});
        }

    } catch (error){
        console.log(error);
    }
});



module.exports = router;