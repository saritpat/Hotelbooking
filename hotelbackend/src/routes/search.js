const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    const { location } = req.query;
    const filePath = path.join(__dirname, "..", "data", "data.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const hotels = JSON.parse(fileContent);

    let filteredHotels = hotels;
    if (location) {
        filteredHotels = filteredHotels.filter((hotel) =>
            hotel.city.toLowerCase().includes(location.toLowerCase())
        );
    }

    res.status(200).json(filteredHotels);
    console.log(filteredHotels);
});

module.exports = router;
