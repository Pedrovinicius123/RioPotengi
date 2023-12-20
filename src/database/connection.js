const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config()

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@dicasparadevsnodejs.hxjftse.mongodb.net/?retryWrites=true&w=majority`,

        (error) => {
            if (error){
                return console.log('An error ocurred while trying to connect: ', error)
            }

        return console.log('Connection secured')

        }    
    )
}

module.exports = connectToDatabase
