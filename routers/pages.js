import express from "express";
const router = express.Router();

import { createPage } from "../render.js";

/* Ready the pages */
const frontpagePage = createPage("frontpage/frontpage.html", {title: "Nodefolio | Welcome"});
const projectsPage = createPage("projects/projects.html", {title: "Nodefolio | Projects"});
const contactPage = createPage("contact/contact.html", {title: "Nodefolio | Contact"});
const cvPage = createPage("cv/cv.html", {title: "Nodefolio | CV"});
const adminPage = createPage("admin/admin.html", {title: "Nodefolio | Admin"});
const dashboardPage = createPage("dashboard/dashboard.html", {title: "Nodefolio | Dashboard"});

router.get("/", (req, res) => {
    res.send(frontpagePage);
});

router.get("/projects", (req, res) => {
    res.send(projectsPage);
});

router.get("/contact", (req, res) => {
    res.send(contactPage);
});

router.get("/cv", (req, res) => {
    res.send(cvPage);
});

router.get("/dashboard", (req, res) => {
    if (req.session.loggedIn) {
        res.send(dashboardPage)
    } else {
        res.redirect("/")
    }
})

router.get("/admin", (req, res) => {
    if (req.session.loggedIn) {
        res.send(dashboardPage)
    } else {
        res.send(adminPage)
    }
})

export default router