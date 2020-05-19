const mongoose = require('mongoose');

const options = {
  useNewUrlParser : true,
  useCreateIndex : true,
  useFindAndModify : false,
  useUnifiedTopology : true
};

const dbUrl = process.env.DB_URL || 'localhost';
const dbPort = process.env.DB_PORT || 27017;
const dbCollection = process.env.DB_COLLECTION || 'rtv';

try {
    mongoose.connect(`mongodb://${dbUrl}:${dbPort}/${dbCollection}`, options);
  } catch (err) {
    console.log(err);
};

module.exports = mongoose;
