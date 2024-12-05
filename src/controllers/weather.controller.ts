import weatherService from "../services/weather.service";
import fs from "fs";
import path from "path";

class WeatherController {
    private logPath = path.join(process.env.HOME as string, "weather_errors.log");

    private logError(message: string) {
        const timestamp = new Date().toISOString();
        fs.appendFile(this.logPath, `[${timestamp}] ${message}\n`, (err) => {
            if (err) console.error("Error writing to log file:", err);
        });
    }

    async index(address: string): Promise<void> {
        try {
            if (!address) {
                const errorMessage = "Address is required.";
                this.logError(errorMessage);
                throw new Error(errorMessage);
            }

            await weatherService.index(address);

        } catch (error) {
            const errorMessage = error instanceof Error ?
                error.message :
                "An unknown error occurred.";
            this.logError(errorMessage);
            throw new Error("Internal server error.");
        }

    }
}

export default new WeatherController();
