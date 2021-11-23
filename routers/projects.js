import express from "express";
const router = express.Router();

import { createConnection } from "../database/connectSqlite.js";


// Hent Projects
router.get("/projects", async (req, res) => {

    const projects = await connection.all("SELECT * from projects");

    res.send(projects);
});

// Create
router.post("/projects", async (req, res) => {
    const projectToCreate = req.body;

    const connection = await createConnection();

    const projects = await connection.run(
        `
        INSERT INTO peojects
        ('title', 'date', 'description', 'github')
        VALUES
        (?, ?, ?, ?);
        `,
        [projectToCreate.title, projectToCreate.date, projectToCreate.description, projectToCreate.github]
    ).then(() => {
        res.sendStatus(200)
    }).catch(() => {
        res.sendStatus(400)
    })
})



// Delete
router.delete("/api/projects/:projectId", async (req, res) => {
    const id = req.params.projectId

    const connection = await createConnection()

    connection.run(`
            DELETE FROM projects WHERE id = ?
            `,
        id
    ).then(() => {
        res.sendStatus(200)
    }).catch(() => {
        res.sendStatus(404)
    })
})

// Update
router.put("/api/projects/", async (req, res) => {
    const project = req.body

    const connection = await createConnection()

    connection.run(`
            UPDATE projects 
            SET 
            title = ?,
            date = ?,
            description = ?,
            github = ?
            WHERE id = ?
            `,
        [project.title, project.date, project.description, project.github, project.id]
    ).then(() => {
        res.sendStatus(200)
    }).catch(() => {
        res.sendStatus(404)
    })

})


export default router
