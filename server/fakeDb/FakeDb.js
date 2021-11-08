//import portfolios from data folder to have the object values
const { portfolios, users } = require('./data');
const Portfolio = require('../database/models/portfolio');
const User = require('../database/models/user');

//Create the collection portofolio in mongoDB.
class FakeDb {

    async clean() {
      await User.deleteMany({});
        await Portfolio.deleteMany({});
  
    }
  
    async addData() {
      await User.create(users); 
        await Portfolio.create(portfolios);
      }
    
      async populate() {
        await this.clean();
        await this.addData();
  
    }
  }
  
  //create the export instance to a new FakeDb class
  module.exports = new FakeDb();