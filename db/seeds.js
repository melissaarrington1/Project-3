const User = require('../models/User')
const City = require('../models/City')
const Weather = require('../models/Weather')
const mongoose = require('../db/connections')

//City Model
const city = new City ({
    city: 'Atlanta',
    state: 'Georgia',
    currentTemp: '50 degrees',
    weather: 'Sunny and Mild'
})

//User Model 
const user = new User({
    name: 'Melissa',
    email: 'melissa@yahoo.com'
})

User.remove({})
  .then(() => user.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())