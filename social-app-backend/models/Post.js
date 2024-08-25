const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: { type: String, required: true },
    likes: { type: Number, default: 0 },
    comments: [{ text: String, date: { type: Date, default: Date.now } }],
    createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
