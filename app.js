import express from "express";
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import and Use routers
import projectsRouter from "./routers/projects.js"
import contactRouter from "./routers/contact.js"
import pagesRouter from "./routers/pages.js"
import adminRouter from "./routers/admin.js"

app.use(projectsRouter);
app.use(contactRouter);
app.use(pagesRouter);
app.use(adminRouter);
// PORT setup
const PORT = process.env.PORT || 8080;

app.listen(PORT, (error) => {
    if (error) {
       console.log("error is", error); 
    }
    console.log("The server is running on port", PORT);
});