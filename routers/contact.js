import express from "express";
import nodemailer from "nodemailer"
import fs from "fs"

const router = express.Router();
const email = "kf.nodefolio@outlook.com";
const pass = JSON.parse(fs.readFileSync("mail.json"))

router.post("/contact/", async (req, res) => {
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
          user: email,
          pass: pass.word
        }
      })

    const options = {
        from: email,
        to: "kasp350t@stud.kea.dk",
        subject: `Nodefolio Message From: ${req.body.name}, E-mail: ${req.body.email}, Phone:  ${req.body.phone}`,
        text: req.body.message
    }

    let info = await transporter.sendMail(options, function (err, info) {
        if (err) {
            console.log(err)
            res.sendStatus(500)
        } else {
            console.log("Sent")
            res.sendStatus(200)
        }
    })
});

export default router