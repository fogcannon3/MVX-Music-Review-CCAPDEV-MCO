const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');

const adminLayout = '../views/layouts/admin'

router.get('/admin', async (req, res) => {
    try{
        const locals = {
            title: "MVX - Admin", //according to the 2nd video, 5:43
            description: "Landing page for MVX"
        }

        res.render('admin/login', {locals, layout: adminLayout});
    } catch (error){
        console.log(error);
    }
});



router.post('/admin', async (req, res) => {
    try{

        const {username, password} = req.body;
        console.log(req.body);

        res.redirect('/admin', {locals, layout: adminLayout});
    } catch (error){
        console.log(error);
    }
});



module.exports = router;