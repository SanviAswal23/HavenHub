const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const {
  isLoggedIn,
  isOwner,
  validateListing
} = require("../middleware.js");

const listingController =
  require("../controllers/listings.js");

const Listing =
  require("../models/listing");

const multer = require("multer");

const { storage } =
  require("../cloudConfig.js");

const upload =
  multer({ storage });


// SEARCH ROUTE
router.get("/search", async(req,res)=>{

  const { location } = req.query;

  let query = {};

  if(location){

    query.$or = [

      {
        country: {
          $regex: location,
          $options: "i"
        }
      },

      {
        location: {
          $regex: location,
          $options: "i"
        }
      }

    ];

  }

  const allListings =
    await Listing.find(query);

  res.render(
    "listings/index.ejs",
    { allListings }
  );

});


// INDEX + CREATE
router
  .route("/")
  .get(
    wrapAsync(listingController.index)
  )

  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    wrapAsync(
      listingController.createListing
    )
  );


// NEW
router.get(
  "/new",
  isLoggedIn,
  listingController.renderNewForm
);


// SHOW + UPDATE + DELETE
router
  .route("/:id")

  .get(
    wrapAsync(
      listingController.showListing
    )
  )

  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,

    wrapAsync(
      listingController.updateListings
    )
  )

  .delete(
    isLoggedIn,
    isOwner,

    wrapAsync(
      listingController.deleteListing
    )
  );


// EDIT
router.get(
  "/:id/edit",

  isLoggedIn,
  isOwner,

  wrapAsync(
    listingController.renderEditForm
  )
);

module.exports = router;