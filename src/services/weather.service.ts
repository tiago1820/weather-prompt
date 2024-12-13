import axios from "axios";
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

            const temperatureCelsius = (data.main.temp - 273.15).toFixed(1) + "º";
            return temperatureCelsius;

        } catch (error) {            
           throw new Error("Error retrieving weather from the API.");
        }
    }
}

export default new weatherService();
