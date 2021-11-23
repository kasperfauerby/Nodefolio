import express from "express";
import bcrypt from "bcrypt";
import { createConnection } from "../database/connectSqlite.js";
const saltRounds = 10;
const router = express.Router();

router.post("/admin/login", async (req, res) => {
    
   

    bcrypt.compare(req.body.pass, hash, function(err, result) {
        if (result) {
            res.sendStatus(200);
        } else {
            console.log(hash)
            console.log(req.body.pass)
            res.sendStatus(400)
        }
    });        
})

export default router