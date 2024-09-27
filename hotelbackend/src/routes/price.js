const express = require('express');
const router = express.Router();

const parseInput = (input) => {
    const parts = input.split("-").map((part) => part.trim());
    if (parts.length !== 2) {
        throw new Error("Invalid room count format");
    } 

    const [peoplePart, roomPart] = parts;

    if (!peoplePart || !roomPart) {
        throw new Error("People or room empty");
    }

    const peopleMatch = peoplePart.match(/\d+/g);
    if (!peopleMatch) {
        throw new Error("Invalid people count");
    }
    const peopleCount = peopleMatch.reduce((sum, num) => sum + parseInt(num, 10), 0);

    const roomMatch = roomPart.match(/(\d+)/);
    if (!roomMatch) {
        throw new Error("Invalid room count");
    }
    const roomCount = roomMatch ? parseInt(roomMatch[0], 10) : 0;

    return { people: peopleCount, room: roomCount };
};

const calculateNight = (checkIn, checkOut) => {
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const timeDifference = checkOutDate - checkInDate;
    const dayDiff = timeDifference / (1000 * 60 * 60 * 24);

    if (dayDiff <= 0) {
        throw new Error("Incorrect date (negative nights)");
    }

    return dayDiff;
};

const calculatePrice = (nights, room, roomRate) => {
    const vat = (7 * nights * room * roomRate) / 100;
    const price = room * nights * roomRate;
    const totalPrice = price + vat;
    return { vat, price, totalPrice };
};

router.get('/', (req, res) => {
    const { checkIn, checkOut, room_rate, room } = req.query;
    try {
        const result = parseInput(room);
        const nights = calculateNight(checkIn, checkOut);
        const { vat, price, totalPrice } = calculatePrice(nights, result.room, room_rate);

        res.status(200).json({
            nights,
            roomCount: result.room,
            vat: vat.toFixed(2),
            price: price.toFixed(2),
            totalPrice: totalPrice.toFixed(2),
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;