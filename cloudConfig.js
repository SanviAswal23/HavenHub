const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// CONFIG
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// STORAGE
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "HavenHub_DEV",   // folder name in Cloudinary
        allowed_formats: ["jpg", "png", "jpeg", "webp"],
        // optional: rename file
        public_id: (req, file) => {
            return Date.now() + "-" + file.originalname;
        }
    }
});

module.exports = {
    cloudinary,
    storage
};