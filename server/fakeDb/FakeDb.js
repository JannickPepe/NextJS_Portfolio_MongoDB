//import portfolios from data -> model folder to have the object values
const { portfolios, users, forumCategories, topics, post } = require('./data');

const Portfolio = require('../database/models/portfolio');
const User = require('../database/models/user');
const ForumCategory = require('../database/models/forumCategory');
const Topic = require('../database/models/topic'); 
const Post = require('../database/models/post');

//Create the collection portofolio in mongoDB.
class FakeDb {

    async clean() {
      await User.deleteMany({});
        await Portfolio.deleteMany({});
        await ForumCategory.deleteMany({});
        await Topic.deleteMany({});
        await Post.deleteMany({});
  
    }
  
    async addData() {
      await User.create(users); 
        await Portfolio.create(portfolios);
        await ForumCategory.create(forumCategories);
        await Topic.create(topics);
        await Post.create(posts);
      }
    
      async populate() {
        await this.clean();
        await this.addData();
  
    }
  }
  
  //create the export instance to a new FakeDb class
  module.exports = new FakeDb();