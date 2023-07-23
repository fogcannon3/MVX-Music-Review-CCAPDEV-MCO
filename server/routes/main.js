const express = require('express');
const router = express.Router();

//adding models to main format:
//nameofmodel = require('../models/nameofjs);
//doing so would make u able to insert/retrieve data to and from the db
//vid 5, 0:46
const Post = require('../models/Post');

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
    
    // try{
    //     const data = await Post.find();
    //     res.render('index', {locals, data});
    // } catch (error){
    //   console.log(error);
    // }
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

//create a onetime function to insert dummy data
//1:07 vid 5
// function insertPostData(){
//     Post.insertMany([
//         {
//             title: "hello this is a title",
//             body: "title says hi"
//         },
//         {
//             title: "hello this is a title1",
//             body: "title says hi1"
//         },
//         {
//             title: "hello this is a title2",
//             body: "title says hi2"
//         }
//     ])
// }
// insertPostData();




router.get('/aboutUs', (req, res) => {
    res.render('aboutUs');
});

router.get('/profile', (req, res) => {
    res.render('profile');
});

module.exports = router;