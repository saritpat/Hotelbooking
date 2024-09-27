const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const filePath = path.join(__dirname, '..', 'data', 'data.json');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const hotels = JSON.parse(fileContent);

    const hotel = hotels.find((hotel) => hotel.id === parseInt(id, 10));

    if (hotel) {
        res.status(200).json(hotel);
    } else {
        res.status(404).json({ message: 'Not found' });
    }
});

module.exports = router;