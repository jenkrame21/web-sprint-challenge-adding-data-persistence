const express = require("express");

const db = require("../../data/dbConfig.js");
const Project = require("./model.js");

const router = express.Router();

// Get All Projects
router.get("/", (req, res) => {
    Project.find()
        .then((projects) => {
            res.json(projects);
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to get projects"
            });
        });
});

// Get Project By ID
router.get("/:id", (req, res) => {
    const { id } = req.params;

    db("projects")
        .where({ id })
        .then((projects) => {
            const project = projects[0];

            if (project) {
                res.json(project);
            } else {
                res.status(404).json({
                    message: "Could not find project with given id"
                });
            }
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to get project"
            });
        });
});

module.exports = router;

