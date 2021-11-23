import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function createConnection() {
    return await open({
        filename: "./database/projects.db",
        driver: sqlite3.Database
    });
}


