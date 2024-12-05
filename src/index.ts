import dotenv from "dotenv";
import path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import { CITY } from "./constants/index.constant";
import weatherController from "./controllers/weather.controller";


async function main() {
    try {
        await weatherController.index(CITY);
        console.log("Weather data updated successfully.");

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}

main();