require('dotenv').config()

module.exports = {
  MONGO_URI: process.env.MONGO_URI || '',
  FIRESTORE_FILE: process.env.FIRESTORE_FILE || '', 
}
