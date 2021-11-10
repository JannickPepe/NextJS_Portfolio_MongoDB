//import portfolios from data folder to have the object values
const { portfolios, users, forumCategories } = require('./data');

const Portfolio = require('../database/models/portfolio');
const User = require('../database/models/user');

const ForumCategory = require('../database/models/forumCategory');

//Create the collection portofolio in mongoDB.
class FakeDb {

    async clean() {
      await User.deleteMany({});
        await Portfolio.deleteMany({});
        await ForumCategory.deleteMany({});
  
    }
  
    async addData() {
      await User.create(users); 
        await Portfolio.create(portfolios);
        await ForumCategory.create(forumCategories);
      }
    
      async populate() {
        await this.clean();
        await this.addData();
  
    }
  }
  
  //create the export instance to a new FakeDb class
  module.exports = new FakeDb();