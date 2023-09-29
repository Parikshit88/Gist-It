const mongoose = require("mongoose");
const mongoURI =
  "mongodb://127.0.0.1:27017/gistit?directConnection=true&tls=false&readPreference=primary&appName=gistit";
const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected with MongoDB Successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToMongo;
