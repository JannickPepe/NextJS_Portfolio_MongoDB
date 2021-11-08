const mongoose = require('mongoose');

const user1Id = mongoose.Types.ObjectId();
const user2Id = mongoose.Types.ObjectId();


//Make the varible data and have the object portfolios to contain field data
const data = {

  users: [
    {
      _id: user1Id,
      avatar: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/10f13510774061.560eadfde5b61.png",
      email: "jannick@live.dk",
      name: "Jannick Pedersen",
      username: "jannick",
      info: "I am Jannick Pedersen, aka EL DIABLO!!",
      password: "jannick123",
      role: "admin"
    },
    {
      _id: user2Id,
      avatar: "https://f0.pngfuel.com/png/312/283/man-face-clip-art-png-clip-art-thumbnail.png",
      email: "jannickp@live.dk",
      name: "Test user",
      username: "jannickp",
      info: "Hello I am Test and I am a test!",
      password: "jannickp123"
    }
  ],
    portfolios: [
      {
        title: 'Job in Netcentric',
        company: 'Netcentric',
        companyWebsite: 'www.google.com',
        location: 'Spain, Barcelona',
        jobTitle: 'Engineer',
        description: 'Doing something, programing....',
        startDate: '01/01/2014',
        endDate: '01/01/2016',
        user: user1Id
      },
      {
        title: 'Job in Siemens',
        company: 'Siemens',
        companyWebsite: 'www.google.com',
        location: 'Slovakia, Kosice',
        jobTitle: 'Software Engineer',
        description: 'Responsoble for parsing framework for JSON medical data.',
        startDate: '01/01/2011',
        endDate: '01/01/2013',
        user: user1Id
      },
      {
        title: 'Work in USA',
        company: 'WhoKnows',
        companyWebsite: 'www.google.com',
        location: 'USA, Montana',
        jobTitle: 'Housekeeping',
        description: 'So much responsibility....Overloaaaaaad',
        startDate: '01/01/2010',
        endDate: '01/01/2011',
        user: user1Id
      }
    ]
  }
  
  module.exports = data;