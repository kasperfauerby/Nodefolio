import express from "express";
import bcrypt from "bcrypt";
import { createConnection } from "../database/connectSqlite.js";
const router = express.Router();

router.post("/admin/login", async (req, res) => {
    const db = await createConnection()
    
    const hashInfo = await db.all(`
        SELECT hash FROM secrets WHERE id = 1
        `,
    )

    const hash = hashInfo.map(hash => hash.hash)

    bcrypt.compare(req.body.pass, hash[0], function(err, result) {
        if (result) {
            req.session.loggedIn = true;
            res.sendStatus(200);
        } else {
            res.sendStatus(400)
        }
    });        
})

router.get("/admin/logout", (req, res) => {
    req.session.loggedIn = false;
    res.redirect("/")
})

export async function checkLogin (pass) {

}

export default router