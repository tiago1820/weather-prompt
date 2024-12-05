import axios from "axios";
import fs from "fs";
import path from "path";
import { BASE_URL, SECRET_KEY } from "../constants/index.constant";

class weatherService {
    async index(address: string) {
        try {
            const url = `${BASE_URL}${encodeURIComponent(address)}&APPID=${SECRET_KEY}`;
            const response = await axios.get(url);
            const data = response.data;

            if (!data?.main?.temp) {
                throw new Error(`Address with name ${address} not found.`);
            }

            const temperatureCelsius = (data.main.temp - 273.15).toFixed(1) + "ºC";

            const homeDirectory = process.env.HOME;
            if (!homeDirectory) {
                throw new Error("HOME environment variable is not defined.");
            }

            const filePath = path.join(homeDirectory, ".temp_value");

            await fs.promises.writeFile(filePath, temperatureCelsius);

            return temperatureCelsius;

        } catch (error) {            
           throw new Error("Error retrieving weather from the API.");
        }
    }
}

export default new weatherService();
