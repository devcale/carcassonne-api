const mongoose  = require("mongoose");

const connectDB = module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'carcassonne',
    }

    try {
        const dburl = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.moofwku.mongodb.net/?retryWrites=true&w=majority`
        console.log('trying to connect using user: '+process.env.MONGODB_USER);
        const conn = await mongoose.connect(dburl, connectionParams);
        console.log("Database connection successful: "+conn.connection.host);
    } catch (error) {
        console.log(error);
        console.log("Database connection failed.");
        process.exit(1);
    }
}

