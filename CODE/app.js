const mongoose = require('mongoose');
const Post = require('./models/Post')
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());


mongoose.connect('mongodb+srv://shubham:shubham@cluster0.3n33vbs.mongodb.net/?retryWrites=true&w=majority');

Post.find({}).limit(1).then(v => console.log(v))
app.get('/create', (req, res) => {

  let obj = {
    userId:22812431,
    id:1,
    title:Math.random() * 45,
    body:Math.random() * 78
}
Post.create(obj).then(v => {
    res.json({msg:v})

});
})


app.listen(3009, () => console.log('loistening on 3009'))






