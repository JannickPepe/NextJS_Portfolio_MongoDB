const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create new Schema which validates by taking values from the user.js in the models folder
const forumCategorySchema = new Schema({
    title: String,
    subTitle: String,
    slug: { type: String, unique: true, index: true}, // see if the user index is true
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('ForumCategory', forumCategorySchema);