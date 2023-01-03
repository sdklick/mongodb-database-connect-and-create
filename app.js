//mongodb database connect and create
const mongoose = require("mongoose");
const localserver = "localhost:27017";
const dbname = "sontu";

const dbconnect = async () => {
  try {
    await mongoose.connect(`mongodb://${localserver}/${dbname}`);
    console.log("mongodb connect successfully");
  } catch (error) {
    console.log("404 server error");
  }
};

dbconnect();
