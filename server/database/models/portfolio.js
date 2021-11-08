const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create the portfolioschema into a new schema where we set the and requirements
const portfolioSchema = new Schema({
  title: { type: String, required: true, maxlength: 128 },
  company: { type: String, required: true, maxlength: 64 },
  companyWebsite: { type: String, required: true, maxlength: 128 },
  location: { type: String, required: true, maxlength: 128 },
  jobTitle: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: Date,
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: { type: Date, default: Date.now }
})

//create the portfolio model onto the mongoose model instance with values portfolio and schema
module.exports = mongoose.model('Portfolio', portfolioSchema);