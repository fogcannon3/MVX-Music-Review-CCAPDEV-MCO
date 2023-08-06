const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const User = require('../models/User');
const bcryptjs = require('bcryptjs'); // Add this line to import bcrypt
const jwt = require('jsonwebtoken');

const adminLayout = '../views/layouts/admin'
const jwtSecret = process.env.JWT_SECRET;
router.use(express.urlencoded({ extended: true }));



const Song = require('../models/Song');
const Home = require('../models/Home');
const Album = require('../models/Album');
const Artist = require('../models/Artist');

/**
 * 
 * Check Login
*/
const authMiddleware = (req, res, next ) => {
    const token = req.cookies.token;
  
    if(!token) {
      return res.status(401).json( { message: 'Unauthorized'} );
    }
  
    try {
      const decoded = jwt.verify(token, jwtSecret);
      req.userId = decoded.userId;
      next();
    } catch(error) {
      res.status(401).json( { message: 'Unauthorized'} );
    }
  }


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



// router.post('/login', async (req, res) => {
//     const {email, password } = req.body;
//     const user = await User.findOne({ email});
  
//     if (user && await bcryptjs.compare(password, user.password)) {
//       req.session.userId = user._id;
//       res.redirect('/home');
//     } else {
//       res.redirect('/login');
//       console.log("wrong password");
//     }
//   });

  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      
      const user = await User.findOne( { email } );
  
      if(!user) {
        return res.status(401).json( { message: 'Invalid credentials' } );
      }
  
      const isPasswordValid = await bcryptjs.compare(password, user.password);
  
      if(!isPasswordValid) {
        return res.status(401).json( { message: 'Invalid credentials' } );
      }
  
      const token = jwt.sign({ userId: user._id}, jwtSecret );
      res.cookie('token', token, { httpOnly: true });
      res.redirect('/home');
  
    } catch (error) {
      console.log(error);
    }
  });


router.get('/logout', (req, res) => {
  res.clearCookie('token');
  //res.json({ message: 'Logout successful.'});
  res.redirect('/');
});



router.get('/home', authMiddleware, async (req, res) => {
    const locals = {
        title: "MVX - Home", //according to the 2nd video, 5:43
        description: "Home page for MVX"
    }
    
    try{
        //THESE CALL THE required .js FILES TO GET THEIR SCHEMAS AND DATABASE DATA
        const homedata = await Home.find();
        const songdata = await Song.find();
        const albumdata = await Album.find();
        const artistdata = await Artist.find();
        res.render('home', {locals, homedata, songdata, albumdata, artistdata});
    } catch (error){
        console.log(error);
    }
});

  

module.exports = router;
