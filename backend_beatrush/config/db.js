const mongoose = require ('mongoose')

const DB_URL='mongodb+srv://user01:user012@users.v6fnf.mongodb.net/'
 const connectDB = async() => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to the Database')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
 }

 module.exports = connectDB
