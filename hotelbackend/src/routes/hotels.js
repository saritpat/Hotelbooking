const express = require("express");
const path = require("path");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res) => {
    const filePath = path.join(__dirname, "..", "data", "data.json");
    const fileContent = fs.readFileSync(filePath, "utf8");
    const allHotels = JSON.parse(fileContent);

    res.status(200).json(allHotels);
});

module.exports = router;
