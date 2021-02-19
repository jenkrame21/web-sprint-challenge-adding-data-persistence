const express = require("express");

const db = require("../../data/dbConfig.js");
const Projects = require("./model.js");

const router = express.Router();

// - [ ] `[POST] /api/projects`
//  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
//  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

// GET All Projects
router.get("/", (req, res) => {
    Projects.find()
        .then((projects) => {
            res.json(projects);
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to get projects"
            });
        });
});

// GET Project By ID
router.get("/:id", (req, res) => {
    const { id } = req.params;

    Projects.findById(id)
        .then((project) => {
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

// POST a new Project
router.post("/", (req, res) => {
    const projectData = req.body;

    Projects.create(projectData)
        .then((project) => {
            res.status(201).json(project);
        })
        .catch((error) => {
            res.status(500).json({
                message: "Failed to create new project"
            });
        });
});

module.exports = router;

