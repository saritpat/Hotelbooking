import fs from "fs";
import path from "path";

export default function HotelById(req, res) {
    const { id } = req.query;

    const filePath = path.join(
        process.cwd(),
        "pages",
        "api",
        "data",
        "data.json"
    );

    const fileContent = fs.readFileSync(filePath, "utf8");
    const hotels = JSON.parse(fileContent);

    const hotel = hotels.find((hotel) => hotel.id === parseInt(id, 10));

    if (hotel) {
        res.status(200).json(hotel);
    } else {
        res.status(404).json({ message: "Not found" });
    }
}
