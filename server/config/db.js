/*DB connection requires mongoose, connection will require the thingy is .env - Vid 4 (8:30) */
/*This allows the entire website package to connect to MongoDB*/
const mongoose = require('mongoose');
const connectDB = async () => {

    try{
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected: ${conn.connection.host}');
    } catch (error){
        console.log(error);
    }
}

/*export the function to use it*/
module.exports = connectDB;