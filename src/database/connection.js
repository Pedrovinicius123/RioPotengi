const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config()

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@dicasparadevsnodejs.hxjftse.mongodb.net/?retryWrites=true&w=majority`

connectToDatabase().catch(error => {
    console.log(error);
})

async function connectToDatabase(){
    await mongoose.connect(uri);
}
module.exports = connectToDatabase;

