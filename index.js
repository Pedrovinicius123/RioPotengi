const dotenv = require('dotenv');

dotenv.config({
    debug: true
})

require('./modules/express')
const conn = require('./src/database/connection')

conn();


