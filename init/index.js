const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const MONGO_URL="mongodb://127.0.0.1:27017/HavenHub";
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
};
initDB();