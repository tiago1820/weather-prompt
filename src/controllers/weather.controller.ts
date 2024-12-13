import weatherService from "../services/weather.service";
import FileLogger from "../utils/fileLogger.utils";

class WeatherController {

    async index(address: string): Promise<void> {
        try {
            if (!address) {
                await FileLogger.logError(".weather_log.txt", "Address is required.");
            }

            const result = await weatherService.index(address);
            await FileLogger.storeResult(".temp_value", result);

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
            await FileLogger.logError(".weather_log.txt", errorMessage);
        }
    }
}

export default new WeatherController();
