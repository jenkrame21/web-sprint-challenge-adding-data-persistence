const express = require("express");

const Projects = require("./model.js");

const router = express.Router();

router.get("/", (req, res) => {
    Projects.find()
        .then((projects) => {
            res.json(projects);
        })
        .catch(() => {
            res.status(500).json({
                message: "Failed to get projects"
            });
        });
});

router.post("/", (req, res) => {
    const projectData = req.body;

    Projects.create(projectData)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch(() => {
            res.status(500).json({
                message: "Failed to create new project"
            });
        });
});

module.exports = router;

