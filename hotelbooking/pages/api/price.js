export default function Price(req, res) {
    const { checkIn, checkOut, room_rate, room } = req.query;

    // split people, room
    const parseInput = (input) => {
        const parts = input.split("-").map((part) => part.trim()); //[people, room]

        if (parts.length !== 2) {
            res.status(400).json({ error: "Invalid room count format" });
        }

        const [peoplePart, roomPart] = input
            .split("-")
            .map((part) => part.trim());

        if (!peoplePart || !roomPart) {
            res.status(400).json({ error: "People or room empty" });
        }

        // check int people
        const peopleMatch = peoplePart.match(/\d+/g);
        if (!peopleMatch) {
            res.status(400).json({ error: "Invalid people count" });
        }
        const peopleCount = peopleMatch.reduce(
            (sum, num) => sum + parseInt(num, 10),
            0
        );

        // check int room
        const roomMatch = roomPart.match(/(\d+)/);
        if (!roomMatch) {
            res.status(400).json({ error: "Invalid room count" });
        }
        const roomCount = roomMatch ? parseInt(roomMatch[0], 10) : 0;

        const result = {
            people: peopleCount ?? 0,
            room: roomCount ?? 0,
        };

        return result;
    };

    // calc night
    const calculateNight = (checkIn, checkOut) => {
        const checkInDate = new Date(checkIn);
        const checkOutDate = new Date(checkOut);
        const timeDifference = checkOutDate - checkInDate;
        const dayDiff = timeDifference / (1000 * 60 * 60 * 24);

        if (dayDiff <= 0) {
            res.status(400).json({ error: "Incorrect date (negative nights)" });
        }

        return dayDiff;
    };

    // calc price
    const calculatePrice = (nights, room, roomRate) => {
        const vat = (7 * nights * room * roomRate) / 100;
        const price = room * nights * roomRate;
        const totalPrice = price + vat;

        return { vat, price, totalPrice };
    };

    // call func
    const result = parseInput(room);
    const nights = calculateNight(checkIn, checkOut);
    const { vat, price, totalPrice } = calculatePrice(
        nights,
        result.room,
        room_rate
    );

    res.status(200).json({
        nights: nights,
        roomCount: result.room,
        vat: vat.toFixed(2),
        price: price.toFixed(2),
        totalPrice: totalPrice.toFixed(2),
    });
    // console.log(
    //     "nights:",
    //     nights,
    //     "people - room:",
    //     result,
    //     vat.toFixed(2),
    //     "price:",
    //     price.toFixed(2),
    //     "totalPrice:",
    //     totalPrice.toFixed(2)
    // );
}
