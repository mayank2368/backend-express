const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://mparvatia66:admin123@cluster0.avokywl.mongodb.net/mycontacts-backend" //mongodb+srv://mparvatia66:admin123@cluster0.avokywl.mongodb.net/?retryWrites=true&w=majority
    );
    console.log(
      "Database connected: ",
      conn.connection.host,
      conn.connection.name
    );
  } catch (err) {
    console.log("Failed to connect to the database", err);
    process.exit(1);
  }
};

module.exports = connectDb;
