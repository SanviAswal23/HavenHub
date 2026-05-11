const mongoose = require("mongoose");
const Listing = require("./models/listing");
const geocode = require("./utils/geocode");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/HavenHub");
  console.log("DB connected");

  const listings = await Listing.find({});

  for (let listing of listings) {
    if (listing.geometry && listing.geometry.coordinates) {
      continue;
    }

    console.log(`Geocoding: ${listing.location}, ${listing.country}`);

    const geometry = await geocode(listing.location, listing.country);

    if (geometry) {
      listing.geometry = geometry;
      await listing.save();
      console.log(`✅ Updated: ${listing.title}`);
    } else {
      console.log(`❌ Failed: ${listing.location}`);
    }

    await new Promise(res => setTimeout(res, 1000));
  }

  console.log("🎯 All listings processed");
  mongoose.connection.close();
}

main();