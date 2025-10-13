// utils/fileReader.js
import { readFile } from "fs/promises";

export async function readJSONFile(filePath) {
  try {
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}
