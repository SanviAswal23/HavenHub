const Listing  = require("../models/listing");
const geocode  = require("../utils/geocode");   
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

    if (!listing.geometry || !listing.geometry.coordinates) {
      const geometry = await geocode(listing.location, listing.country);
      if (geometry) {
        listing.geometry = geometry;
        await listing.save();
        console.log("Auto-geocoded:", listing.title);
      }
    }
  res.render("listings/show.ejs", { listing });
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exist");
    return res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};

module.exports.createListing = async (req, res) => {

  const newListing = new Listing(req.body.listing);

  if (!req.user) {
    req.flash("error", "You must be logged in to create a listing");
    return res.redirect("/login");
  }

  newListing.owner = req.user._id;

  if (req.file) {
    newListing.image = {
      url: req.file.path,
      filename: req.file.filename
    };
  } else {
    newListing.image = {
      url: "",
      filename: ""
    };
  }

  const geometry = await geocode(
    newListing.location,
    newListing.country
  );

  if (geometry) {
    newListing.geometry = geometry;
  }

  await newListing.save();

  req.flash("success", "New listing created");

  res.redirect("/listings");
};

module.exports.updateListings = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true }
  );

  if (req.file) {
    listing.image = { url: req.file.path, filename: req.file.filename };
  }

  const geometry = await geocode(listing.location, listing.country);
  if (geometry) {
    listing.geometry = geometry;
  }

  await listing.save();
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};