const express = require("express");

const Tasks = require('./model.js');

const router = express.Router();

router.get("/", (req, res) => {
    Tasks.find()
        .then((tasks) => {
            res.json(tasks);
        })
        .catch(() => {
            res.status(500).json({
                message: "Failed to get tasks"
            });
        });
});

router.post("/", (req, res) => {
    const taskData = req.body;

    Tasks.create(taskData)
        .then((task) => {
            res.status(201).json(task);
        })
        .catch(() => {
            res.status(500).json({
                message: "Failed to create new task"
            });
        });
});

module.exports = router;