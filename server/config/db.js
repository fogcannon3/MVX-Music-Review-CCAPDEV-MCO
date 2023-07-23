/*DB connection requires mongoose, connection will require the thingy is .env vid 4 (8:30) */
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