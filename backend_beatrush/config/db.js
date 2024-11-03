const mongoose = require ('mongoose')

const DB_URL='mongodb+srv://rpx03775:phoenix123@users.v6fnf.mongodb.net/users'
 const connectDB = async() => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: 'true',
            useUnifiedTopology: 'true',
        });
        console.log('Connected to the Database')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
 }

 module.exports = connectDB
