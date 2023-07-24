const express = require('express');
const router = express.Router();

//adding models to main format:
//nameofmodel = require('../models/nameofjs);
//doing so would make u able to insert/retrieve data to and from the db
//vid 5, 0:46
const Post = require('../models/Post');
const Song = require('../models/Song');
const Home = require('../models/Home');
const Album = require('../models/Album');
const Artist = require('../models/Artist');

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

router.get('/song/:id', async (req, res) => {
    try{
        let slug = req.params.id;

        const songdata = await Song.findById({_id: slug});

        if (!songdata) {
            // If no song is found for the provided slug (404 page)
            return res.status(404).send('Song not found');
        }

        const locals = {
            title: "MVX - Song", //according to the 2nd video, 5:43
            song_title: songdata.song_title,
            description: "Song page for MVX"
        }

        res.render('song', {locals, songdata: songdata});
    } catch (error){
        console.log(error);
    }
});

router.get('/album/:id', async (req, res) => {
    try{
        let slug = req.params.id;

        const albumdata = await Album.findById({_id: slug});

        if (!albumdata) {
            // If no song is found for the provided slug (404 page)
            return res.status(404).send('Song not found');
        }

        const locals = {
            title: "MVX - Album", //according to the 2nd video, 5:43
            album_title: albumdata.album_title,
            description: "Album page for MVX"
        }

        res.render('album', {locals, albumdata: albumdata});
    } catch (error){
        console.log(error);
    }
});

router.get('/artist/:id', async (req, res) => {
    try{
        let slug = req.params.id;

        const artistdata = await Artist.findById({_id: slug});

        if (!artistdata) {
            // If no song is found for the provided slug (404 page)
            return res.status(404).send('Song not found');
        }

        const locals = {
            title: "MVX - Artist", //according to the 2nd video, 5:43
            song_title: artistdata.artist_title,
            description: "Artist page for MVX"
        }

        res.render('artist', {locals, artistdata: artistdata});
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



// // function to encode file data to base64 encoded string
//var fs = require('fs');

// function insertSongData(){
//     Song.insertMany([
//         {
//             song_title: "Jesus of Suburbia",
//             song_artist: "Green Day",
//             song_album: "American Idiot",
//             song_release: "2004-09-21",
//             song_genre: "Punk Rock",
//             song_writer:"Billie Joe Armstrong",
//             song_composers:"Chris Lord-Alge",
//             song_record_label:"Reprise Records",
//             song_listeners: 167889230,
//             song_lyrics: "I'm the son of rage and love, the Jesus of Suburbia. The bible of none of the above, on a steady diet of soda pop and ritalin.",
//             song_rating: 4.9,
//             song_img: "https://i.imgur.com/1A6g1qU.png",
//             song_tags:["punk", "2000s", "legendary", "childhood", "long", "meaningful", "frankenstein", "catchy"],
//             song_from_the_same_artist:["Basket Case", "Worry Rock", "Kill The DJ", "East Jesus Nowhere", "Geek Stink Breath"],
//             song_similar_to_this:["At The Library", "21st Century Breakdown", "Dirty Rotten Bastards", "Forever Now", "Walking Contradiction", "Waiting"],
//         },

//         {
//             song_title: "HOT",
//             song_artist: "Seventeen",
//             song_album: "Face The Sun",
//             song_release: "2022-05-27",
//             song_genre: "K-Pop",
//             song_writer:"Dan August Rigo",
//             song_composers:"Bum Joo Kye",
//             song_record_label:"Pledis Entertainment",
//             song_listeners: 144018789,
//             song_lyrics: "모두 우릴 쳐다봐 (봐) 태양 위를 달리는 마차 (계속 달려 oh)",
//             song_rating: 4.4,
//             song_img: "https://i.imgur.com/7MIYAul.png",
//             song_tags:["kpop", "3rd gen", "boy group", "hybe", "pledis", "catchy", "funny", "summer", "legendary"],
//             song_from_the_same_artist:["Mansae", "Adore U", "Don't Wanna Cry", "HIT", "Pretty U", "Smile Flower"],
//             song_similar_to_this:["Alcohol-Free", "Hi-Ya-Ya", "VERY NICE", "Left & Right", "THANKS", "Rock with you"],
//         },
//     ])
// }
// insertSongData();

// function updateAlbumData(){
//     Album.updateOne({album_title: "Stadium Arcadium"}, {$set:{album_img:"https://i.imgur.com/d1PxQ92.jpeg"}})
// }
// updateAlbumData();

// function insertAlbumData(){
//     Album.insertMany([
//         {
//             album_title: "UNFORGIVEN",
//             album_artist:"LE SSERAFIM",
//             album_tracklist:["Unforgiven", "No-Return", "Eve, Psyche, & The Bluebeard's Wife", "FEARNOT", "Flash Forward", "Fire in the belly"],
//             album_release:"2023-05-01",
//             album_genre:"K-Pop",
//             album_record_label:"Source Music, a HYBE company",
//             album_listeners:92035621,
//             album_img: "https://i.imgur.com/emnHuPv.png",
//             album_rating: 4.3,
//             album_tags:["new", "catchy", "hype", "girl group", "4th gen", "kpop"],
//             album_from_the_same_artist:["Antifragile", "Fearless"],
//             album_similar_to_this:["Rising Sun", "Stadium Arcadium", "I Believe", "Mine", "Midnight Guest", "Unlock My World"],
//         },
//         {
//             album_title: "MIROTIC",
//             album_artist:"TVXQ!",
//             album_tracklist: [
//                 "Mirotic",
//                 "Wrong Number",
//                 "Picture of You",
//                 "Crazy Love",
//                 "Hey! (Don't Bring Me Down)",
//                 "You're My Melody",
//                 "Rainbow",
//                 "Paradise",
//                 "Are You A Good Girl",
//                 "Flower Lady",
//                 "Don't Say Goodbye",
//                 "Forgotten Season",
//                 "Love In The Ice"
//               ],
//             album_release:"2008-09-19",
//             album_genre:"K-Pop",
//             album_record_label:"SM Entertainment",
//             album_listeners:17102846,
//             album_img: "https://i.imgur.com/pzaqV0x.png",
//             album_rating: 4.7,
//             album_tags:["kpop", "2nd gen", "last", "aktf", "boy group", "db5k", "sm", "catchy", "hype", "legendary"],
//             album_from_the_same_artist: [
//                 "Whatever They Say",
//                 "Tri-Angle",
//                 "Rising Sun",
//                 "'O' Jung.Ban.Hap",
//                 "Mirotic",
//                 "The Secret Code",
//                 "TONE",
//                 "WITH",
//                 "Catch Me",
//                 "Humanoids",
//                 "TIME",
//                 "Spellbound",
//                 "TENSE",
//                 "New Chapter #1: The Chance of Love",
//                 "New Chapter #2: The Truth of Love",
//                 "Rise As God"
//               ],
//             album_similar_to_this:["Sorry Sorry", "Girls' Generation", "Ring Ding Dong", "Stand Up", "Hands Up"],
//         },
//     ])
// }
// insertAlbumData();

// function insertArtistData(){
//     Artist.insertMany([
//         {
//             artist_name: "TVXQ!",
//             artist_debut: 2004-1-14,
//             artist_discography:["Hug", "Whatever They Say", "Tri-Angle", "Rising Sun", "'O' Jung-Ban-Hap", "Mirotic", "Keep Your Head Down", "Keep Your Head Down Repackage", "Catch Me", "Time", "Tense", "Spellbound", "With", "Rise As God", "The Chance of Love", "The Truth of Love", "Parallel Parallel", "Lime and Lemon"],
//             artist_genre: "K-Pop",
//             artist_record_label: "SM Entertainment",
//             artist_listeners:651342,
//             artist_rating: 4.3,
//             artist_img: "https://i.imgur.com/rIDkdLZ.jpeg",
//             artist_tags: ["2nd gen", "boy group", "legendary", "gods", "db5k", "aktf"],
//             artist_similar_to_this:["SHINee", "Super Junior", "H.O.T", "SHINHWA", "EXO", "Girls' Generation", "BIGBANG", "2PM"]

//         },
//         {
//             artist_name: "LE SSERAFIM",
//             artist_debut: 2004-1-14,
//             artist_discography:["FEARLESS", "ANTIFRAGILE", "UNFORGIVEN"],
//             artist_genre: "K-Pop",
//             artist_record_label: "SOURCE MUSIC",
//             artist_listeners:10169447,
//             artist_rating: 4.6,
//             artist_img: "https://i.imgur.com/Lol2BTC.png",
//             artist_tags: ["4th gen", "girl group", "hybe", "ot6", "legendary", "catchy", "visual"],
//             artist_similar_to_this:["IVE", "NewJeans", "NMIXX", "Kep1er", "IZ*ONE", "STAYC", "aespa", "ITZY"]

//         },
//     ])
// }
// insertArtistData();



router.get('/aboutUs', (req, res) => {
    res.render('aboutUs');
});

router.get('/termsAndConditions', (req, res) => {
    res.render('termsAndConditions');
});

router.get('/privacyPolicy', (req, res) => {
    res.render('privacyPolicy');
});

router.get('/faq', (req, res) => {
    res.render('faq');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});


module.exports = router;