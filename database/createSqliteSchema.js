import { createConnection } from "./connectSqlite.js";

(async () => {
    const connection = await createConnection();

    await connection.exec("DROP TABLE IF EXISTS projects");

    const projectsTableSchema = `
        CREATE TABLE projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            date DATE,
            description TEXT,
            github TEXT,
        );
    `
    await connection.exec(projectsTableSchema);
})() 