const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
dotenv.config();

const app = express();
app.use(express.json());

const corsConfig = {
    origin: ["http://localhost:3000"],
    methods: ["GET"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use("/static", express.static(path.join(__dirname, "src", "public")));

const searchRoute = require("./src/routes/search");
const priceRoute = require("./src/routes/price");
const hotelsRoute = require("./src/routes/hotels");
const hotelByIdRoute = require("./src/routes/hotelById");

app.use("/api/search", searchRoute);
app.use("/api/price", priceRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/hotels", hotelByIdRoute);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
