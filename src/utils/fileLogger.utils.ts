import fs from "fs";
import path from "path";

class FileLogger {
    private getFilePath(fileName: string): string {
        const homeDirectory = process.env.HOME;
        if (!homeDirectory) {
            throw new Error("HOME environment variable is not defined.");
        }
        return path.join(homeDirectory, fileName);
    }

    async logError(fileName: string, message: string) {
        try {
            const filePath = this.getFilePath(fileName);
            const timestamp = new Date().toISOString();
            const logMessage = `[${timestamp}] ${message}\n`;
            await fs.promises.appendFile(filePath, logMessage);
        } catch (error) {
            throw new Error(`Error writing to error log: ${fileName}`);
        }
    }

    async storeResult(fileName: string, result: string) {
        try {
            const filePath = this.getFilePath(fileName);
            await fs.promises.writeFile(filePath, result + "\n");
        } catch (error) {
            throw new Error(`Error writing to result file: ${fileName}`);
        }
    }
}

export default new FileLogger();