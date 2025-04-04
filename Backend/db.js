const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOSE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB Connected: ${mongoose.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.white);
  }
};

module.exports = connectDB;
