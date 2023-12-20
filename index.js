const dotenv = require('dotenv');
require('./modules/express')
const conn = require('./src/database/connection')

dotenv.config({
    debug: true
})
