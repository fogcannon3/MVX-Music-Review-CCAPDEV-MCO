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



// // function to encode file data to base64 encoded string
// var fs = require('fs');

// //for some reason, will require a separate variable for EACH image
// var bitmap_i = fs.readFileSync('./public/img/jaejoong_i.jpg', 'base64');
// var bitmap_risingSun = fs.readFileSync('./public/img/rising sun tvxq.jpg', 'base64');
// var bitmap_hug = fs.readFileSync('./public/img/hug_tvxq.jpg', 'base64');
// var bitmap_unforgiven = fs.readFileSync('./public/img/unforgiven le sserafim.png', 'base64');
// var bitmap_dark_blood = fs.readFileSync('./public/img/dark blood enhypen.jpg', 'base64');
// var bitmap_american_idiot = fs.readFileSync('./public/img/american idiot.png', 'base64');
// var bitmap_mirotic = fs.readFileSync('./public/img/MiroticTVXQ.png', 'base64');
// var bitmap_db5k = fs.readFileSync('./public/img/tvxq5.jpg', 'base64');
// var bitmap_greenday = fs.readFileSync('./public/img/greenday.jpg', 'base64');
// var bitmap_ls = fs.readFileSync('./public/img/le sserafim.png', 'base64');
// var bitmap_jaejoong = fs.readFileSync('./public/img/jaejoong.png', 'base64');
// var bitmap_a7x= fs.readFileSync('./public/img/a7x.jpg', 'base64');


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
//             album_artist:"LE SSERAFIM",
//             album_tracklist:["Unforgiven", "No-Return", "Eve, Psyche, & The Bluebeard's Wife", "FEARNOT", "Flash Forward", "Fire in the belly"],
//             album_release:"2023-05-01",
//             album_genre:"K-Pop",
//             album_record_label:"Source Music, a HYBE company",
//             album_listeners:92035621,
//             album_img: bitmap_unforgiven,
//             album_rating: 4.3,
//             album_tags:["new", "catchy", "hype", "girl group", "4th gen", "kpop"],
//             album_from_the_same_artist:["Antifragile", "Fearless"],
//             album_similar_to_this:["Rising Sun", "Stadium Arcadium", "I Believe", "Mine", "Midnight Guest", "Unlock My World"],
//         },
//         {
//             album_title: "Rising Sun",
//             album_artist:"TVXQ!",
//             album_tracklist:["Unforgiven", "No-Return", "Eve, Psyche, & The Bluebeard's Wife", "FEARNOT", "Flash Forward", "Fire in the belly"],
//             album_release:"2005-09-12",
//             album_genre:"K-Pop",
//             album_record_label:"SM Entertainment",
//             album_listeners:92035621,
//             album_img: bitmap_risingSun,
//             album_rating: 4.8,
//             album_tags:["legendary", "catchy", "warm", "mellow", "boy group", "2nd gen", "kpop"],
//             album_from_the_same_artist:["Tri-Angle", "'O' Jung-Ban-Hap", "Mirotic", "Keep Your Head Down"],
//             album_similar_to_this:["Sorry Sorry", "I", "Tense", "INCREDIBLE"],
//         },
//         {
//             album_title: "American Idiot",
//             album_artist: "Green Day",
//             album_tracklist:["American Idiot", "Jesus of Suburbia", "Holiday", "Boulevard of Broken Dreams", "Are We The Waiting", "St. Jimmy", "Give Me Novacaine", "She's A Rebel", "Extraordinary Girl", "Letterbomb", "Wake Me Up When September Ends", "Homecoming", "Whatsername"],
//             album_release:"2004-09-21",
//             album_genre:"Punk Rock",
//             album_record_label:"Reprise Records",
//             album_listeners:776510892,
//             album_img: bitmap_american_idiot,
//             album_rating: 5,
//             album_tags:["punk", "legendary", "headbang", "2000s", "classic", "powerful", "story"],
//             album_from_the_same_artist:["Dookie", "21st Century Breakdown", "Insomniac", "Uno!", "Warning", "Revolution Radio"],
//             album_similar_to_this:["Take Off Your Pants And Jacket", "Three Cheers for Sweet Revenge", "A Fever You Can't Sweat Out", "Money Money 2020"],
//         },
//         {
//             album_title: "Mirotic",
//             album_artist: "TVXQ!",
//             album_tracklist:["Mirotic", "Wrong Number", "Picture of You", "Crazy Love", "Hey! (Don't Bring Me Down)", "You're My Melody", "Rainbow", "Paradise", "Are You A Good Girl", "Flower Lady", "Forgotten Season", "Love In The Ice"],
//             album_release:"2008-09-19",
//             album_genre:"K-Pop",
//             album_record_label:"SM Entertainment",
//             album_listeners:17102492,
//             album_img: bitmap_mirotic,
//             album_rating: 4.7,
//             album_tags:[ "2nd gen", "kpop", "legendary", "catchy", "final", "mellow", "boy group"],
//             album_from_the_same_artist:["Catch Me", "'O' Jung-Ban-Hap","Keep Your Head Down", "Rise As God"],
//             album_similar_to_this:["Gee", "Ring Ding Dong", "Mr. Simple", "Hot Summer"],
//         },
//         {
//             album_title: "I",
//             album_artist: "Kim Jaejoong",
//             album_tracklist:["One Kiss", "Mine", "내안 가득히", "나만의 위로", "All Alone"],
//             album_release:"2013-01-17",
//             album_genre:"K-Pop",
//             album_record_label:"C-JeS Entertainment",
//             album_listeners:1039245,
//             album_img: bitmap_i,
//             album_rating: 4.1,
//             album_tags:["meaningful", "rock", "2nd gen", "powerful", "story", "j-jun"],
//             album_from_the_same_artist:["Y", "WWW", "NO.X", "Love song", "BORN GENE", "Fallinbow"],
//             album_similar_to_this:["Tarantallegra", "Chocolate", "Slow Dance", "Flower"],
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
//             artist_img: bitmap_db5k,
//             artist_tags: ["2nd gen", "boy group", "legendary", "gods", "db5k", "aktf"],
//             artist_similar_to_this:["SHINee", "Super Junior", "H.O.T", "SHINHWA", "EXO", "Girls' Generation", "BIGBANG", "2PM"]

//         },
//         {
//             artist_name: "Green Day",
//             artist_debut: 1991-7-1,
//             artist_discography:["39/Smooth", "Kerplunk", "Dookie", "Insomniac", "Nimrod", "Warning", "Shenanigans", "American Idiot", "21st Century Breakdown", "Uno!", "Dos!", "Tre!", "Revolution Radio", "Father of All"],
//             artist_genre: "Punk Rock",
//             artist_record_label: "Reprise Records",
//             artist_listeners:27005605,
//             artist_rating: 4.6,
//             artist_img: bitmap_greenday,
//             artist_tags: ["punk", "childhood", "legendary", "2000s", "hall of fame", "90s", "rock", "loud"],
//             artist_similar_to_this:["blink-182", "My Chemical Romance", "Panic! At The Disco", "The Network", "Foxboro Hottubs", "Paramore", "Simple Plan"]

//         },
//         {
//             artist_name: "LE SSERAFIM",
//             artist_debut: 2022-5-2,
//             artist_discography:["FEARLESS", "ANTIFRAGILE", "UNFORGIVEN"],
//             artist_genre: "K-Pop",
//             artist_record_label: "SOURCE MUSIC, a HYBE company",
//             artist_listeners:10169447,
//             artist_rating: 4.6,
//             artist_img: bitmap_ls,
//             artist_tags: ["4th gen", "girl group", "queens", "mommy", "hybe", "ot6"],
//             artist_similar_to_this:["IVE", "NewJeans", "NMIXX", "Kep1er", "STAYC", "aespa", "ITZY"]

//         },
//         {
//             artist_name: "Kim Jaejoong",
//             artist_debut: 2004-1-14,
//             artist_discography:["I", "Y", "WWW", "NO.X", "Love song", "BORN GENE", "Fallinbow"],
//             artist_genre: "K-Pop",
//             artist_record_label: "iNKODE Entertainment",
//             artist_listeners:38750,
//             artist_rating: 4.3,
//             artist_img: bitmap_jaejoong,
//             artist_tags: ["2nd gen", "tvxq", "dbsk", "legendary", "jyj", "aktf"],
//             artist_similar_to_this:["XIA", "U-KNOW Yunho", "Max Changmin", "Park Yoochun", "TAEYEON", "Taeyang", "JYJ", "TVXQ!"]

//         },
//         {
//             artist_name: "Avenged Sevenfold",
//             artist_debut: 2002-3-19,
//             artist_discography:["Sounding The Seventh Trumpet", "Waking The Fallen", "City of Evil", "Avenged Sevenfold", "Diamonds in the Rough", "Nightmare", "Hail To The King", "The Stage", "Life Is But A Dream"],
//             artist_genre: "Heavy Metal",
//             artist_record_label: "Warner Records",
//             artist_listeners:9244030,
//             artist_rating: 4.5,
//             artist_img: bitmap_a7x,
//             artist_tags: ["2000s", "metal", "forever", "screamo", "emo", "rock", "solos"],
//             artist_similar_to_this:["Slipknot", "Linkin Park", "Korn", "Bullet For My Valentine", "Black Veil Brides", "Metallica", "Megadeth", "Killswitch Engage"]

//         },

//     ])
// }
// insertArtistData();



router.get('/aboutUs', (req, res) => {
    res.render('aboutUs');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

module.exports = router;

const { MongoClient, GridFSBucket } = require('mongodb');
const MONGODB_URI="mongodb+srv://nate:02ghEzm5H0Gmctjr@cluster0.e2fut6v.mongodb.net/mvx";
const dbName = 'mvx';
const client = new MongoClient(MONGODB_URI, { useUnifiedTopology: true });
const fs = require('fs');
const { Readable } = require('stream');

async function storePhoto(filePath, fileName) {
    const db = client.db(dbName);
    const bucket = new GridFSBucket(db);
  
    const readableStream = fs.createReadStream(filePath);
    const uploadStream = bucket.openUploadStream(fileName);
  
    const data = await new Promise((resolve, reject) => {
      readableStream.pipe(uploadStream)
        .on('finish', resolve)
        .on('error', reject);
    });
  
    console.log('File stored in MongoDB:', fileName);
  }

// Usage example:
const filePath = './public/img/rising sun tvxq.jpg'; // Replace with the path to your photo file
const fileName = 'rising sun tvxq.jpg'; // Replace with the desired filename in MongoDB
storePhoto(filePath, fileName);

async function getPhoto(fileName) {
    const db = client.db(dbName);
    const bucket = new GridFSBucket(db);
  
    const downloadStream = bucket.openDownloadStreamByName(fileName);
  
    const data = await new Promise((resolve, reject) => {
      let chunks = [];
      downloadStream
        .on('data', chunk => chunks.push(chunk))
        .on('error', reject)
        .on('end', () => resolve(Buffer.concat(chunks)));
    });
  
    return data;
  }

  const fileNameToRetrieve = 'rising sun tvxq.jpg'; // Replace with the filename you want to retrieve
  getPhoto(fileNameToRetrieve)
    .then(photoData => {
      // Do something with the photo data, e.g., save it to a file or send it in the response
      // For example:
      fs.writeFileSync('retrievedPhoto.jpg', photoData);
      console.log('Photo retrieved and saved as retrievedPhoto.jpg');
    })
    .catch(err => {
      console.error('Error retrieving the photo:', err);
    });