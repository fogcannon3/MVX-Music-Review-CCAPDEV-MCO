const express = require('express');
const router = express.Router();

//adding models to main format:
//nameofmodel = require('../models/nameofjs);
//doing so would make u able to insert/retrieve data to and from the db
//vid 5, 0:46
const Post = require('../models/Post');
const Song = require('../models/Song');
const Home = require('../models/Home');

//Routes
//These are what allow the overall site to gain access to separate pages
    //First parameter of .get and .render is just the name of the .ejs file being called
/*
GET/HOME Route
*/
//getting data from db and putting it in the home page vid 5 (3:45)
//first make sure that the function in the route is async
//data is what stores all the stuff in the db, 
//Post.find() finds all data in the db related to Post
router.get('', async (req, res) => {
    const locals = {
        title: "MVX - Get Started", //according to the 2nd video, 5:43
        description: "Landing page for MVX"
    }
    
    try{
        const data = await Post.find();
        res.render('index', {locals, data});
    } catch (error){
        console.log(error);
    }
});

router.get('/home', async (req, res) => {
    const locals = {
        title: "MVX - Home", //according to the 2nd video, 5:43
        description: "Home page for MVX"
    }
    
    try{
        const homedata = await Home.find();
        const songdata = await Song.find();
        res.render('home', {locals, homedata, songdata});
    } catch (error){
        console.log(error);
    }
});

router.get('/song/:id', async (req, res) => {
    try{
        let slug = req.params.id;

        const songdata = await Song.findById({_id: slug});

        const locals = {
            title: "MVX - Song", //according to the 2nd video, 5:43
            song_title: data.song_title,
            description: "Song page for MVX"
        }

        res.render('song', {locals, songdata});
    } catch (error){
        console.log(error);
    }
});



/*vid 5 (5:07)
For example for the ejs part (go to the home page)
having an unordered list:
>data is the db name
>post could be named anything
>_id would link the post to a specific page (all ids are unique)

<ul class="article-ul">
<% data.forEach(post => { %> //its a foreach because u can for loop the many posts
    <li>
        <a href="/post/<%= post._id %>">
            <span><%= post.title %></span> 
            <span class="article-list_date"><%= post.createdAt.toDateString() %></span>
        </a>
    </li>
<% }) %>
</ul>
*/



// function to encode file data to base64 encoded string
var fs = require('fs');

//for some reason, will require a separate variable for EACH image
var bitmap_i = fs.readFileSync('./public/img/jaejoong_i.jpg', 'base64');
var bitmap_risingSun = fs.readFileSync('./public/img/rising sun tvxq.jpg', 'base64');
var bitmap_hug = fs.readFileSync('./public/img/hug_tvxq.jpg', 'base64');
var bitmap_unforgiven = fs.readFileSync('./public/img/unforgiven le sserafim.png', 'base64');
var bitmap_dark_blood = fs.readFileSync('./public/img/dark blood enhypen.jpg', 'base64');


//create a onetime function to insert dummy data
//1:07 vid 
// function insertHomeData(){
//     Home.insertMany([
//         {
//             home_new_releases:["Bite Me", "Shalala", "Unforgiven", "Picture Of You"],
//             home_following:["Eminem", "Avenged Sevenfold", "Kanye West", "Rick Astley", "Linkin Park"],
//             home_personalized_recommendations:["Rising Sun", "Stadium Arcadium", "I Believe", "American Idiot", "Mine"],
//             home_trending:["Tri-Angle", "Mirotic", "Ruby", "I'll Be There"]
//         },
//     ])
// }
// insertHomeData();

// function insertAlbumData(){
//     Album.insertMany([
//         {
//             album_title: "UNFORGIVEN",
//             song_artist:"LE SSERAFIM",
//             song_tracklist:"",
//             song_release:"2023-05-01",
//             song_genre:"K-Pop",
//             song_writer:"Nile Rodgers",
//             song_composers:"Hitman Bang",
//             song_record_label:"Source Music, a HYBE company",
//             song_lyrics:"UNFORGIVEN UNFORGIVEN I'M A, UNFORGIVEN UNFORGIVEN",
//             song_img: bitmap_unforgiven,
//             song_tags:["new", "catchy", "hype", "party", "4th gen", "kpop"],
//             song_similar_to_this:["Antifragile", "Fearless", "Unforgiven", "Sour Grapes"],
//             song_from_the_same_artist:["Rising Sun", "Stadium Arcadium", "I Believe", "Mine"],
//         },
//         {
//             song_title: "Bite Me",
//             song_artist:"ENHYPEN",
//             song_album:"DARK BLOOD",
//             song_release:"2023-05-22",
//             song_genre:"K-Pop",
//             song_writer:"David Stewart",
//             song_composers:"Cirkut",
//             song_record_label:"BELIFT LAB, a HYBE company",
//             song_lyrics:"It's you and me in this world, 내게로 다시 와, tie me",
//             song_img: bitmap_dark_blood,
//             song_tags:["new", "catchy", "fun", "cool", "4th gen", "kpop"],
//             song_from_the_same_artist:["Bite Me", "Shalala", "Unforgiven", "Picture Of You"],
//             song_similar_to_this:["Rising Sun", "Stadium Arcadium", "I Believe", "Mine"],
//         },
//         {
//             song_title: "Hug",
//             song_artist:"TVXQ!",
//             song_album:"Hug",
//             song_release:"2004-01-14",
//             song_genre:"K-Pop",
//             song_writer:"Yoon Jung",
//             song_composers:"Park Chang-hyun",
//             song_record_label:"SM Entertainment",
//             song_lyrics:"하루만 니방의 침대가 되고싶어 Oh Baby 더 따스히 포근히 내 품에 감싸 안고 재우고 싶어",
//             song_img: bitmap_hug,
//             song_tags:["legendary", "catchy", "2nd gen", "db5k", "mellow", "soft", "kpop"],
//             song_from_the_same_artist:["'O' Jung-Ban-Hap ", "I Believe", "She", "Picture Of You"],
//             song_similar_to_this:["Rising Sun", "Stadium Arcadium", "I Believe", "American Idiot", "Mine"],
//         },
//     ])
// }
// insertAlbumData();



router.get('/aboutUs', (req, res) => {
    res.render('aboutUs');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

module.exports = router;