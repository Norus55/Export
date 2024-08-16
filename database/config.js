const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        //Connect to database
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Connection Successful');
        
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect