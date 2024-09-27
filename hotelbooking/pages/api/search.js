import fs from "fs";
import path from "path";

export default function Search(req, res) {
    const { location } = req.query;

    const filePath = path.join(
        process.cwd(),
        "pages",
        "api",
        "data",
        "data.json"
    );

    const fileContent = fs.readFileSync(filePath, "utf8");
    const hotels = JSON.parse(fileContent);

    let filteredHotels = hotels;

    if (location) {
        filteredHotels = filteredHotels.filter((hotel) =>
            hotel.city.toLowerCase().includes(location.toLowerCase())
        );
    }

    res.status(200).json(filteredHotels);
}
