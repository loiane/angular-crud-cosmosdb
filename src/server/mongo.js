const mongoose = require('mongoose');

/**
 * Set to Node.js native promises
 * Per http://mongoosejs.com/docs/promises.html
 */
mongoose.Promise = global.Promise;

const env = require('./env/environment');

// eslint-disable-next-line max-len
const mongoUri = `mongodb://${env.cosmos.accountName}:${env.cosmos.key}@${env.cosmos.accountName}.documents.azure.com:${env.cosmos.port}/?ssl=true`;

// const mongoUri = `mongodb://localhost:27017/contacts`;

function connect() {
 mongoose.set('debug', true);
 return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose
};
