const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    name: String,
    id:Number,
    userId:Number,
    title:String,
    body:String,
  
  });
  
  const Post = mongoose.model('Post', postSchema);
  
module.exports = Post;