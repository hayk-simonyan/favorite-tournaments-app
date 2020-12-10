const MongoClient = require('mongodb').MongoClient;
const config = require('config');
const mongoURI = config.get('mongoURI');

const connectDB = async () => {
  try {
    const client = new MongoClient(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    client.connect(() => {
      console.log('Database connected...');
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
