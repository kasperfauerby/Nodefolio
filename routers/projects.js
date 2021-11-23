import express from "express";
const router = express.Router();

import { createConnection } from "../database/connectSqlite.js";


// Hent Projects
router.get("/api/projects", async (req, res) => {
    const connection = await createConnection();

    const projects = await connection.all("SELECT * FROM projects");

    res.send(projects);
});

// Create
router.post("/api/projects", async (req, res) => {
    const projectToCreate = req.body;

    const connection = await createConnection();

    const projects = await connection.run(
        `
        INSERT INTO projects
        ('title', 'category', 'technologies', 'links')
        VALUES
        (?, ?, ?, ?);
        `,
        [projectToCreate.title, projectToCreate.category, projectToCreate.technologies, projectToCreate.links]
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
            category = ?,
            technologies = ?,
            links = ?
            WHERE id = ?
            `,
        [project.title, project.category, project.technologies, project.links, project.id]
    ).then(() => {
        res.sendStatus(200)
    }).catch(() => {
        res.sendStatus(404)
    })

})


export default router
