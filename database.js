const mongoose  = require("mongoose");

const connectDB = module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'carcassonne',
    }
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, connectionParams);
        console.log("Database connection successful: "+conn.connection.host);
    } catch (error) {
        console.log(error);
        console.log("Database connection failed.");
        process.exit(1);
    }
}

