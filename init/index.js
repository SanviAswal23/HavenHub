require("dotenv").config({ path: require("path").join(__dirname, "../.env") });
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL; // uses your Atlas URL from .env

async function main() {
  await mongoose.connect(MONGO_URL);
}

main()
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(err));

const initDB = async () => {
  await Listing.deleteMany({});

  const updatedData = initData.data.map((obj) => ({
    ...obj,
    owner: new mongoose.Types.ObjectId("69e34eb2853ca611d6f2f084"),
  }));

  await Listing.insertMany(updatedData);
  console.log("data was initialized");
  mongoose.connection.close(); // close connection when done
};

initDB();