import fs from "fs";
import path from "path";

export default function AllHotel(req, res) {
    // (.join make path can use in window (/) & linux (\))
    // process.cwd return (root directory of project)
    const filePath = path.join(
        process.cwd(),
        "pages",
        "api",
        "data",
        "data.json"
    );

    // read data.json file
    const fileContent = fs.readFileSync(filePath, "utf8");
    const allHotels = JSON.parse(fileContent);

    if (req.method === "GET") {
        res.status(200).json(allHotels);
    }
}
