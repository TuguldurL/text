const mongoose = require("mongoose");

const uri = "mongodb+srv://tuguldur:mtbread@cluster1.pchop5n.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected mongodb.");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
