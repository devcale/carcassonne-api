const mongoose  = require("mongoose");

const database = module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'carcassonne',
    }
    try {
        mongoose.connect(process.env.MONGODB_URI, connectionParams);
        console.log("Database connection successful.");
    } catch (error) {
        console.log(error);
        console.log("Database connection failed.");
    }
}

